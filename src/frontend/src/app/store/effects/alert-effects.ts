import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertActionTypes, HideAlert } from '../actions/alert-actions';
import { concatMap, of, timer } from 'rxjs';
import { alertDuration } from 'src/app/app.component';

@Injectable()
export class AlertEffects {
  showAlert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AlertActionTypes.ShowAlert),
      concatMap(() => timer(alertDuration + 1000)),
      concatMap(() => of(new HideAlert()))
    )
  );

  constructor(private actions$: Actions) {}
}
