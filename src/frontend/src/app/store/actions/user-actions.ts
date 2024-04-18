import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/models/user';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailed = '[User] Load Users Failed',
  LoadActiveUser = '[User] Load Active User',
  LoadActiveUserSuccess = '[User] Load Active User Success',
  LoadActiveUserFailed = '[User] Load Active User Failed',
}

//load all users
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: User[]) {}
}

export class LoadUsersFailed implements Action {
  readonly type = UserActionTypes.LoadUsersFailed;
  constructor(public payload: any) {}
}

//load the active user
export class LoadActiveUser implements Action {
  readonly type = UserActionTypes.LoadActiveUser;
}

export class LoadActiveUserSuccess implements Action {
  readonly type = UserActionTypes.LoadActiveUserSuccess;
  constructor(public payload: User) {}
}

export class LoadActiveUserFailed implements Action {
  readonly type = UserActionTypes.LoadActiveUserFailed;
  constructor(public payload: any) {}
}

export type UserActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFailed
  | LoadActiveUser
  | LoadActiveUserSuccess
  | LoadActiveUserFailed;
