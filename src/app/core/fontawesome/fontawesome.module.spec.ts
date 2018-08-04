import { FontawesomeModule } from './fontawesome.module';

describe('FontawesomeModule', () => {
  let fontawesomeModule: FontawesomeModule;

  beforeEach(() => {
    fontawesomeModule = new FontawesomeModule();
  });

  it('should create an instance', () => {
    expect(fontawesomeModule).toBeTruthy();
  });
});
