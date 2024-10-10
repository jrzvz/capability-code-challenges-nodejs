
const { expect } = require('chai');
const { firstPalindrome } = require('../../src/arrays/findFirstPalindrome');

describe('array', () => {
    describe('findFirstPalindrome', () => {
        it('should return first palindrome where there are more than one', () => {
            const words = ["abc","car","ada","racecar","cool"];

            const result = firstPalindrome(words);

            expect(result).equal("ada");
        });
        it('should return first palindrome where there is only one', () => {
            const words = ["notapalindrome","racecar"];

            const result = firstPalindrome(words);

            expect(result).equal("racecar");
        });
        it('should return empty string since there are not palindromes', () => {
            const words = ["def","ghi"];

            const result = firstPalindrome(words);

            expect(result).equal("");
        });
    });
});
