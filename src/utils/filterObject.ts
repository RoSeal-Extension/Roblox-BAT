export function filterObject(obj: Record<string, unknown>) {
    const newObj: Record<string, unknown> = {};

    for (const key in obj) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
            newObj[key] = value;
        }
    }

    return newObj;
}