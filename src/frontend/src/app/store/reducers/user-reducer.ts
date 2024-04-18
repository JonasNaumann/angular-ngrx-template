import { User } from 'src/app/shared/models/user';
import { UserActionTypes } from '../actions/user-actions';
import { PayloadAction } from '../actions/payload-action';

export interface UserState {
  users: User[];
  activeUser: User | null;
}

export const initialState: UserState = {
  users: [],
  activeUser: null,
};

export function userReducer(
  state = initialState,
  action: PayloadAction
): UserState {
  switch (action.type) {
    case UserActionTypes.LoadUsersSuccess:
      return { ...state, users: action.payload };
    case UserActionTypes.LoadActiveUserSuccess:
      return { ...state, activeUser: action.payload };
    default:
      return state;
  }
}
