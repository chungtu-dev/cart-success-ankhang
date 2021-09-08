export function isNullOrUndefined(value) {
    return [null, undefined].indexOf(value) !== -1;
}

export function isEmptyOrNil(value) {
    return ['', [], null, undefined].indexOf(value) !== -1;
}