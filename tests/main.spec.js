/**
 * Desafio FizzBuzz
 * Escreva uma lib que receba um número e:
 *
 * Se n for divisível por 3, no lugar do número escreva Fizz
 * Se n for divisível por 5, no lugar do número escreva Buzz
 * Se n for divisível por 3 e 5, no lugar do número escreva FizzBuzz
 * Se não for multiplo de nada, retorna o número.
 */

import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });
  it('should return `FizzBuzz` when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });
  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(22)).to.be.equal(22);
  });
  it('should return 0 when number is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
