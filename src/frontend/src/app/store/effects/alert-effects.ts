import { AlertService } from 'src/app/core/services/alert.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertActionTypes, HideAlert } from '../actions/alert-actions';
import { concatMap, of, timer } from 'rxjs';

@Injectable()
export class AlertEffects {
  showAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlertActionTypes.ShowAlert),
      concatMap(() => timer(this.alertService.getAlertDuration() + 1000)),
      concatMap(() => of(new HideAlert()))
    )
  );

  constructor(private actions$: Actions, private alertService: AlertService) {}
}
