import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';
import { AlertCategory } from 'src/app/shared/enums/alert-category';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public mapErrorToAlert(error: unknown): Alert {
    return {
      category: AlertCategory.Error,
      code: (error as Alert).code,
      message: (error as Alert).message,
    };
  }

  // initialised inside styles.scss
  public getAlertDuration(): number {
    return +(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--alert-duration')
        .replace('s', '') + '000'
    );
  }
}
