import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlertState } from '../reducers/alert-reducer';

export const selectAlertState = createFeatureSelector<AlertState>('alert');

// select active user
export const selectAlert = createSelector(
  selectAlertState,
  (state: AlertState) => state.alert
);

export const selectAlertVisible = createSelector(
  selectAlertState,
  (state: AlertState) => state.isVisible
)
