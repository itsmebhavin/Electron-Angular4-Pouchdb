import { Component } from '@angular/core';
import { ThemeService } from './_services/theme/theme.service';
@Component({
  selector: 'ufp-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private _theme: ThemeService) {
    // We are injecting theme service here so that if we have theme stored in localstorage, then
    // this constructor will call themeservice's contructor and set it from that. Check theme service's contructor.

  }

}
