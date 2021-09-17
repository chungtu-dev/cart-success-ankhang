import {request as Api} from './index';

export function getCart(){
    return Api.get('/');
}