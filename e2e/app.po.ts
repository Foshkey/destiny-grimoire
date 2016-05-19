export class DestinyGrimoirePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('destiny-grimoire-app h1')).getText();
  }
}
