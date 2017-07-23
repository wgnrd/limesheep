import { LimesheepPage } from './app.po';

describe('limesheep App', () => {
  let page: LimesheepPage;

  beforeEach(() => {
    page = new LimesheepPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
