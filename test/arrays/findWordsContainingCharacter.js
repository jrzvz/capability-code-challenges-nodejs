const { expect } = require('chai');
const { findWordsContaining } = require('../../src/arrays/findWordsContainingCharacter');

describe('array', () => {
    describe('findWordsContainingCharacter', () => {
        it('should find character on every words', () => {
            const words = ["leet","code"];
            const x = 'e';

            const result = findWordsContaining(words, x);

            expect(result).to.deep.equals([0, 1]);
        });
        it('should find character on some words', () => {
            const words = ["abc","bcd","aaaa","cbc"];
            const x = 'a';

            const result = findWordsContaining(words, x);

            expect(result).to.deep.equals([0, 2]);
        });
        it('should not find character on any words', () => {
            const words = ["abc","bcd","aaaa","cbc"];
            const x = 'z';

            const result = findWordsContaining(words, x);

            expect(result).to.deep.equals([]);
        });
    });
});
