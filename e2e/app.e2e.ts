import { DestinyGrimoirePage } from './app.po';

describe('destiny-grimoire App', function() {
  let page: DestinyGrimoirePage;

  beforeEach(() => {
    page = new DestinyGrimoirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('destiny-grimoire works!');
  });
});
