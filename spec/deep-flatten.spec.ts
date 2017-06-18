import {deepFlatten} from '../src/functions/deep-flatten';

describe('deepFlatten()', () => {
    it('should flatten any kind of array', () => {
        expect(deepFlatten([[1], [1]])).toEqual([1, 1]);
        expect(deepFlatten([[1], [1], [1]])).toEqual([1, 1, 1]);
        expect(deepFlatten([[1, 1], [1], [1]])).toEqual([1, 1, 1, 1]);
        expect(deepFlatten([[1, 1], [[1, [1]]], [1]])).toEqual([1, 1, 1, 1, 1]);
    });
});