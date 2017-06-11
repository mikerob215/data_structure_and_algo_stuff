/**
 * Helper to create a range of numbers
 * @param start
 * @param end
 * @return {Array}
 */
export const range = (start: number, end: number): number[] => {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};