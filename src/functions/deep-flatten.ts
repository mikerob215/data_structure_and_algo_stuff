export const deepFlatten = (array: any[]): any[] =>
    array.reduce((previousValue: any, currentValue: any) => {
        const flatten = Array.isArray(currentValue) ?
            deepFlatten(currentValue) :
            currentValue;
        return previousValue.concat(flatten);
    }, []);
