import {request as Api} from './index';

// export function getCart(){
//     return Api.get('/');
// }

export function getCart(){
    // return Api.get('/CartTest/GetCartOrderResult?crmOrderId=48923032&phone=0981221212');
    return Api.get('/');
}

export function DeleteOrder(ìn){
    return Api.post('/');
}