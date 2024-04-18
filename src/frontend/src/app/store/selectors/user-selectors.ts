import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../reducers/user-reducer';

export const selectUserState = createFeatureSelector<UserState>('user');

// select active user
export const selectActiveUser = createSelector(
  selectUserState,
  (state: UserState) => state.activeUser
);

// select loading state of user
export const selectLoadingState = createSelector(
  selectUserState,
  (state: UserState) => state.isLoading
);
