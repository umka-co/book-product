import { toCyrillic, toLatin } from './convert';

const UNSUPPORTED_CHARS = '*/?!$%&+-(){}[]&@';

/**
 * Tests for toCyrillic() function
 */
describe('toCyrillic() function', () => {
  it('returns empty string for empty input', () => {
    const inputValue = '';
    const expectedValue = '';
    const result = toCyrillic(inputValue);
    expect(result).toBe(expectedValue);
  });

  it('returns predefined values', () => {
    const inputValue = [UNSUPPORTED_CHARS, 'schjochka', 'SCHJOCHKA', 'zhopa', 'sraka'];
    const expectedValue = [UNSUPPORTED_CHARS, 'щёчка', 'щёчка', 'жопа', 'срака'];
    for (let i = 0; i < inputValue.length; i++) {
      const result = toCyrillic(inputValue[i]);
      expect(result).toBe(expectedValue[i]);
    }
  });

  it('returns specific value', () => {
    const inputValue = 'zhopa';
    const expectedValue = 'жопа';
    const result = toCyrillic(inputValue);
    expect(result).toBe(expectedValue);
  });
});

/**
 * Tests for toLatin() function
 */
describe('toLatin() function', () => {
  it('returns empty string for empty input', () => {
    const inputValue = '';
    const expectedValue = '';
    const result = toLatin(inputValue);
    expect(result).toBe(expectedValue);
  });

  it('supports spaces', () => {
    const inputValue = ' 0-0-0 ';
    const expectedValue = inputValue;
    const result = toLatin(inputValue);
    expect(result).toBe(expectedValue);
  });

  it('returns predefined values', () => {
    const inputValue = ['щёчка', 'ЩЁЧКА', 'жопа', 'срака', UNSUPPORTED_CHARS];
    const expectedValue = ['schjochka', 'schjochka', 'zhopa', 'sraka', UNSUPPORTED_CHARS];
    for (let i = 0; i < inputValue.length; i++) {
      const result = toLatin(inputValue[i]);
      expect(result).toBe(expectedValue[i]);
    }
  });

  it('returns specific value', () => {
    const inputValue = 'жопа';
    const expectedValue = 'zhopa';
    const result = toLatin(inputValue);
    expect(result).toBe(expectedValue);
  });
});
