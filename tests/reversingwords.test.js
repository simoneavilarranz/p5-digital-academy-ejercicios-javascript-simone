import { describe, it, expect } from 'vitest';
import { reversingWords } from '/js/reversingwords';

describe('reversingWords', () => {

  describe('reverse', () => {
    it('invierte el orden de las palabras', () => {
      expect(reversingWords('hola mundo')).toBe('mundo hola');
    });
  });

});