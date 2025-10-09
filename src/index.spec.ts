import { hello, version } from '../index';

describe('Template', () => {
  describe('hello', () => {
    it('should return formatted greeting', () => {
      const result = hello('World');
      expect(result).toBe('Hello, World!');
    });

    it('should handle empty string', () => {
      const result = hello('');
      expect(result).toBe('Hello, !');
    });
  });

  describe('version', () => {
    it('should have a valid version', () => {
      expect(version).toMatch(/^\d+\.\d+\.\d+$/);
    });
  });
});
