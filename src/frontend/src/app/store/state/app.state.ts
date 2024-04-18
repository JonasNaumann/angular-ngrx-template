import { ActionReducerMap } from '@ngrx/store';
import { UserState, userReducer } from '../reducers/user-reducer';
import { UserEffects } from '../effects/user-effects';
import { PayloadAction } from '../actions/payload-action';

//combine all states
export interface AppState {
  user: UserState;
}

//combine all reducers
export const reducers: ActionReducerMap<AppState, PayloadAction> = {
  user: userReducer,
};

//combine all effects
export const effects = [UserEffects];
