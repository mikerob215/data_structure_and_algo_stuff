import 'jasmine';
import {range} from '../src/functions/range';

describe('range()', () => {
    it('should output an array from the start and end parameters', () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(range(1, 10000)).toContain(345);
    });
});

