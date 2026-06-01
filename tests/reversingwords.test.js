import { describe, it, expect } from 'vitest';
import { reversingWords } from '/js/reversingwords';

describe('reversingWords', () => {

  describe('reverse', () => {
    it('invierte el orden de las palabras', () => {
      expect(reversingWords('hola mundo')).toBe('mundo hola');
    });
  });

  describe('punto', () => {
    it('mantiene el punto unido a su palabra', () => {
      expect(reversingWords('hola mundo.')).toBe('mundo. hola');
    });
  });

  describe('spacing', () => {
    it('ignora espacios al inicio y al final', () => {
      expect(reversingWords('  hola mundo  ')).toBe('mundo hola');
    });
  });

  describe('inter', () => {
    it('normaliza multiples espacios entre palabras', () => {
      expect(reversingWords('hola   mundo')).toBe('mundo hola');
    });
  });

  describe('empty', () => {
    it('devuelve cadena vacía para un string vacío', () => {
      expect(reversingWords('')).toBe('');
    });

    it('devuelve cadena vacía para un string con solo espacios', () => {
      expect(reversingWords('   ')).toBe('');
    });
  });

});