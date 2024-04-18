import { User } from 'src/app/shared/models/user';
import { UserActionTypes } from '../actions/user-actions';
import { PayloadAction } from '../actions/payload-action';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface UserState extends EntityState<User> {
  activeUser: User | null;
  isLoading: boolean;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export const initialState: UserState = userAdapter.getInitialState({
  activeUser: null,
  isLoading: false,
});

export function userReducer(
  state = initialState,
  action: PayloadAction
): UserState {
  switch (action.type) {
    // load the active user
    case UserActionTypes.LoadActiveUser:
      return { ...state, isLoading: true };
    case UserActionTypes.LoadActiveUserSuccess:
      return userAdapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        { ...state, isLoading: false }
      );
    case UserActionTypes.LoadActiveUserFailed:
      return { ...state, isLoading: false };
    // update a user
    case UserActionTypes.UpdateUser:
      return { ...state, isLoading: true };
    case UserActionTypes.UpdateUserSuccess:
      return userAdapter.updateOne(
        { id: action.payload.id, changes: action.payload },
        { ...state, isLoading: false }
      );
    case UserActionTypes.UpdateUserFailed:
      return { ...state, isLoading: false };
    //delete a user
    case UserActionTypes.DeleteUser:
      return { ...state, isLoading: true };
    case UserActionTypes.DeleteUserSuccess:
      return userAdapter.removeOne(action.payload, {
        ...state,
        isLoading: false,
      });
    case UserActionTypes.DeleteUserFailed:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
