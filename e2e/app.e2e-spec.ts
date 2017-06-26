import { JohnsMathsQuizPage } from './app.po';

describe('johns-maths-quiz App', () => {
  let page: JohnsMathsQuizPage;

  beforeEach(() => {
    page = new JohnsMathsQuizPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
