import { browser, by, element } from 'protractor';

export class ElectronAngular4PouchdbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
