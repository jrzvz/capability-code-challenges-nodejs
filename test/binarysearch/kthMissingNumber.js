const { expect } = require('chai');
const { findKthPositive } = require('../../src/binarysearch/kthMissingNumber');

describe('binarySearch', () => {
    describe('kthMissingNumber', () => {
        it('should find kth missing positive number', () => {
            const arr = [2, 3, 4, 7, 11];
            const k = 5;

            const result = findKthPositive(arr, k);

            expect(result).equal(9);
        });
        it('should find kth missing positive number', () => {
            const arr = [1, 2, 3, 4];
            const k = 2;

            const result = findKthPositive(arr, k);

            expect(result).equal(6);
        });
    });
});
