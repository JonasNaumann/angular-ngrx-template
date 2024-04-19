import { Action } from '@ngrx/store';
import { Alert } from 'src/app/core/models/alert';

export enum AlertActionTypes {
  ShowAlert = '[Alert] Show Alert',
  HideAlert = '[Alert] Hide Alert',
}

// show alert
export class ShowAlert implements Action {
  readonly type = AlertActionTypes.ShowAlert;
  constructor(public payload: Alert) {}
}

// hide alert
export class HideAlert implements Action {
  readonly type = AlertActionTypes.HideAlert;
}

export type AlertActions = ShowAlert | HideAlert;
