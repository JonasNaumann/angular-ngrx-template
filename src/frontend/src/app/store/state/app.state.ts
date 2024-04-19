import { ActionReducerMap } from '@ngrx/store';
import { UserState, userReducer } from '../reducers/user-reducer';
import { UserEffects } from '../effects/user-effects';
import { PayloadAction } from '../actions/payload-action';
import { AlertState, alertReducer } from '../reducers/alert-reducer';
import { AlertEffects } from '../effects/alert-effects';

//combine all states
export interface AppState {
  user: UserState;
  alert: AlertState;
}

//combine all reducers
export const reducers: ActionReducerMap<AppState, PayloadAction> = {
  user: userReducer,
  alert: alertReducer,
};

//combine all effects
export const effects = [UserEffects, AlertEffects];
