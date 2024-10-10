const { expect } = require('chai');
const { numIdenticalPairs } = require('../../src/arrays/numberOfGoodPairs');

describe('array', () => {
    describe('numberOfGoodPairs', () => {
        it('should find good pairs', () => {
            const nums = [1, 2, 3, 1, 1, 3];

            const result = numIdenticalPairs(nums);

            expect(result).equal(4);
        });
        it('should find good pairs', () => {
            const nums = [1, 1, 1, 1];

            const result = numIdenticalPairs(nums);

            expect(result).equal(6);
        });
        it('should not find good pairs', () => {
            const nums = [1, 2, 3];

            const result = numIdenticalPairs(nums);

            expect(result).equal(0);
        });
    });
});
