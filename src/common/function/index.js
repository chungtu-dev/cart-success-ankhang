import {sexType} from '@/common/types';

export function isNullOrUndefined(value) {
    return [null, undefined].indexOf(value) !== -1;
}

export function isEmptyOrNil(value) {
    return ['', [], null, undefined].indexOf(value) !== -1;
}

export function getSexString(sex) {
    switch (sex) {
        case sexType.male:
            return 'Anh';
        case sexType.female:
            return 'Chị';
        default:
            return 'Bạn';
    }
}

export function formatNumberWithCommas(x) {
    if (typeof x !== 'number') {
        return '';
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}