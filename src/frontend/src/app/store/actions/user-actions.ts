import { Action } from '@ngrx/store';
import { ThrownError } from 'src/app/core/services/error.service';
import { User } from 'src/app/shared/models/user';

export enum UserActionTypes {
  LoadActiveUser = '[User] Load Active User',
  LoadActiveUserSuccess = '[User] Load Active User Success',
  LoadActiveUserFailed = '[User] Load Active User Failed',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFailed = '[User] Update User Failed',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFailed = '[User] Delete User Failed',
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
  constructor(public payload: ThrownError) {}
}

//update a user
export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  constructor(public payload: User) {}
}

export class UpdateUserFailed implements Action {
  readonly type = UserActionTypes.UpdateUserFailed;
  constructor(public payload: ThrownError) {}
}

//delete a user
export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser;
  constructor(public payload: string) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;
  constructor(public payload: string) {}
}

export class DeleteUserFailed implements Action {
  readonly type = UserActionTypes.DeleteUserFailed;
  constructor(public payload: ThrownError) {}
}

export type UserActions =
  | LoadActiveUser
  | LoadActiveUserSuccess
  | LoadActiveUserFailed
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFailed
  | DeleteUser
  | DeleteUserSuccess
  | DeleteUserFailed;
