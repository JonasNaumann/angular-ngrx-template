import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import {
  LoadActiveUserFailed,
  LoadActiveUserSuccess,
  LoadUsersFailed,
  LoadUsersSuccess,
  UserActionTypes,
} from '../actions/user-actions';
import { UserService } from 'src/app/core/services/user.service';
@Injectable()
export class UserEffects {
  loadUsers$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LoadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => new LoadUsersSuccess(users)),
          catchError((error) => of(new LoadUsersFailed(error)))
        )
      )
    )
  );

  loadActiveUser$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LoadActiveUser),
      mergeMap(() =>
        this.userService.getActiveUser().pipe(
          map((user) => new LoadActiveUserSuccess(user)),
          catchError((error) => of(new LoadActiveUserFailed(error)))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
