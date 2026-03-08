export function filterObject(obj) {
    const newObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
            newObj[key] = value;
        }
    }
    return newObj;
}
