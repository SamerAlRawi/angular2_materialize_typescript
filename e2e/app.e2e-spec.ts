import { MytsPage } from './app.po';

describe('angular2site App', () => {
  let page: MytsPage;

  beforeEach(() => {
    page = new MytsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
