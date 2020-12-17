/**
 * Desafio FizzBuzz
 * Escreva uma lib que receba um número e:
 *
 * Se n for divisível por 3, no lugar do número escreva Fizz
 * Se n for divisível por 5, no lugar do número escreva Buzz
 * Se n for divisível por 3 e 5, no lugar do número escreva FizzBuzz
 * Se não for multiplo de nada, retorna o número.
 */
const FizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  }
  return number;
};

export default FizzBuzz;
