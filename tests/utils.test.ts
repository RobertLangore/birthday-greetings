import { areSameDates } from '../src/utils';

describe('testing util functions', () => {
  test('dates should be the same', () => {
    const date1 = new Date('1982/10/18');
    const date2 = new Date('1988/10/18');

    expect(areSameDates(date1, date2)).toBe(true);
  });

  test('dates should not be the same', () => {
    const date1 = new Date('1982/10/18');
    const date2 = new Date('1982/10/08');

    expect(areSameDates(date1, date2)).toBe(false);
  });
});
