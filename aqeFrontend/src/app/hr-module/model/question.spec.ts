import { Question } from './question';

describe('Question', () => {
  it('should create an instance', () => {
    expect(new Question(1,"hey","a",["a","v","c","d"],"E",1,2)).toBeTruthy();
  });
});
