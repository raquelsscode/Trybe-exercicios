const myFizzBuzz = require('./myFizzBuzz.js');

describe('A função myFizzBuzz', () => {
    it('Espera que retorne fizzbuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    })
    it('Espera que retorne fizz', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    })
    it('Espera que retorne buzz', () => {
        expect(myFizzBuzz(70)).toEqual('buzz');
    })
    it('Espera que retorne false', () => {
        expect(myFizzBuzz('o')).toEqual(false);
    })
})