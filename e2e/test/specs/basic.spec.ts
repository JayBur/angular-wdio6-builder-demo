describe('webdriver.io page', () => {
  it('should have the right title', () => {
    browser.url('');
    const title = browser.getTitle();
    expect(title).toEqual('AngularWdio6BuilderDemo');
  });

  it('should say app is running', () => {
    browser.url('');
    const message = $('body > app-root > div.content > div.card.highlight-card.card-small > span').getText();
    expect(message).toEqual('angular-wdio6-builder-demo app is running!');
  });
});
