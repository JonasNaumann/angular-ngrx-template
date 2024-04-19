import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  DeleteUser,
  DeleteUserFailed,
  DeleteUserSuccess,
  LoadActiveUserFailed,
  LoadActiveUserSuccess,
  UpdateUser,
  UpdateUserFailed,
  UpdateUserSuccess,
  UserActionTypes,
} from '../actions/user-actions';
import { UserService } from 'src/app/core/services/user.service';
import { ShowAlert } from '../actions/alert-actions';
import { AlertService } from 'src/app/core/services/alert.service';

@Injectable()
export class UserEffects {
  loadActiveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LoadActiveUser),
      mergeMap(() =>
        this.userService.getActiveUser().pipe(
          map((user) => new LoadActiveUserSuccess(user)),
          catchError((error: unknown) => {
            new ShowAlert(this.alertService.mapErrorToAlert(error));
            return of(new LoadActiveUserFailed());
          })
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.UpdateUser),
      mergeMap((action: UpdateUser) =>
        this.userService.updateUser(action.payload).pipe(
          map((user) => new UpdateUserSuccess(user)),
          catchError((error: unknown) => {
            new ShowAlert(this.alertService.mapErrorToAlert(error));
            return of(new UpdateUserFailed());
          })
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.DeleteUser),
      mergeMap((action: DeleteUser) =>
        this.userService.deleteUser(action.payload).pipe(
          map((id) => new DeleteUserSuccess(id)),
          catchError((error: unknown) => {
            new ShowAlert(this.alertService.mapErrorToAlert(error));
            return of(new DeleteUserFailed());
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private alertService: AlertService
  ) {}
}
