const sum = require('./sum');

describe('A função sum', () => {
    it('Espera que a função sum exista', () => {
        expect(typeof sum).toBe('function');
    })
    it('Espera que o somatório 4 e 5 seja igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
    })
    it('Espera que o somatório 0 e 0 seja igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    })
    it('Espera que a função lance um erro ao somar strings', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
})