import { PayloadAction } from '../actions/payload-action';
import { AlertActionTypes } from '../actions/alert-actions';
import { Alert } from 'src/app/core/models/alert';

export interface AlertState {
  alert: Alert | undefined;
  isVisible: boolean;
}

export const initialState: AlertState = {
  alert: undefined,
  isVisible: false,
};

export function alertReducer(
  state = initialState,
  action: PayloadAction
): AlertState {
  switch (action.type) {
    // show alert
    case AlertActionTypes.ShowAlert:
      return { ...state, alert: action.payload, isVisible: true };
    // hide alert
    case AlertActionTypes.HideAlert:
      return { ...state, alert: undefined, isVisible: false };
    default:
      return state;
  }
}
