"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = filterObject;
function filterObject(obj) {
    const newObj = {};
    for (const key in obj) {
        const value = obj[key];
        if (value !== null && value !== undefined) {
            newObj[key] = value;
        }
    }
    return newObj;
}
