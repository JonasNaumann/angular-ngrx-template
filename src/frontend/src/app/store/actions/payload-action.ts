import { Action } from '@ngrx/store';

export interface PayloadAction extends Action {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  payload?: any;
}
