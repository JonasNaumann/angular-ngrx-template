import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}

// global alert duration converted to typescript number
// initialised inside styles.scss
export const alertDuration: number = +(
  getComputedStyle(document.documentElement)
    .getPropertyValue('--alert-duration')
    .replace('s', '') + '000'
);
