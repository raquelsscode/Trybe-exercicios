const myRemove = require('./myremove.js');

describe('A função myRemove', () => {
    it('Espera que o numero 3 seja removido do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    })
    it('Espera que array não retorne com o numero 3 nele', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    })
    it('Espera que o array se repita', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})