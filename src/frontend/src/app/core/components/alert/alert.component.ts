import { Component, OnInit } from '@angular/core';
import { AppState } from '@auth0/auth0-angular';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  selectAlert,
  selectAlertVisible,
} from 'src/app/store/selectors/alert-selectors';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common';
import { AlertCategory } from 'src/app/shared/enums/alert-category';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent implements OnInit {
  public alert$: Observable<Alert | undefined> = of();
  public isVisible$: Observable<boolean> = of(false);
  public isFading$: Observable<boolean> = of(false);
  public alertCategory = AlertCategory;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.alert$ = this.store.select(selectAlert);
    this.isVisible$ = this.store.select(selectAlertVisible);
  }

  public mapErrorCode(code: number): string {
    switch (code) {
      case 500:
        return 'Something went wrong.';
      case 401:
        return 'User is not logged in.';
      case 403:
        return 'User is unauthorized for this action.';
      case 404:
        return 'Resource not found.';
      case 408:
        return 'Request timeout';
      default:
        return 'An unknown error occurred.';
    }
  }
}
