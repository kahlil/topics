import { TopicsPage } from './app.po';

describe('topics App', function() {
  let page: TopicsPage;

  beforeEach(() => {
    page = new TopicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
