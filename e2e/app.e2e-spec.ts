import { NinjaTutorialAppPage } from './app.po';

describe('ninja-tutorial-app App', function() {
  let page: NinjaTutorialAppPage;

  beforeEach(() => {
    page = new NinjaTutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
