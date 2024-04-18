import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user-reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

//select all users
export const selectUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

//select active user
export const selectActiveUser = createSelector(
  selectUserState,
  (state: UserState) => state.activeUser
);
