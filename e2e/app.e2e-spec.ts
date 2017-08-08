import { NG2Page } from './app.po';

describe('ng2 App', () => {
  let page: NG2Page;

  beforeEach(() => {
    page = new NG2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
