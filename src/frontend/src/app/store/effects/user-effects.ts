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
import { ErrorService, ThrownError } from 'src/app/core/services/error.service';

@Injectable()
export class UserEffects {
  loadActiveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LoadActiveUser),
      mergeMap(() =>
        this.userService.getActiveUser().pipe(
          map((user) => new LoadActiveUserSuccess(user)),
          catchError((error: unknown) => {
            this.errorService.handleError(error as ThrownError);
            return of(new LoadActiveUserFailed(error as ThrownError));
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
            this.errorService.handleError(error as ThrownError);
            return of(new UpdateUserFailed(error as ThrownError));
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
            this.errorService.handleError(error as ThrownError);
            return of(new DeleteUserFailed(error as ThrownError));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private errorService: ErrorService
  ) {}
}
