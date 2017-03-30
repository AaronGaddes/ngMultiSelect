import { MultiSelectorPage } from './app.po';

describe('multi-selector App', () => {
  let page: MultiSelectorPage;

  beforeEach(() => {
    page = new MultiSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
