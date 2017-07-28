import { ElectronAngular4PouchdbPage } from './app.po';

describe('electron-angular4-pouchdb App', () => {
  let page: ElectronAngular4PouchdbPage;

  beforeEach(() => {
    page = new ElectronAngular4PouchdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
