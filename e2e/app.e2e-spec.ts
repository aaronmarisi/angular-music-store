import { AngularMusicStorePage } from './app.po';

describe('angular-music-store App', () => {
  let page: AngularMusicStorePage;

  beforeEach(() => {
    page = new AngularMusicStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
