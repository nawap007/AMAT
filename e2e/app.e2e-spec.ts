import { AMATPage } from './app.po';

describe('amat App', () => {
  let page: AMATPage;

  beforeEach(() => {
    page = new AMATPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
