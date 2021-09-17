import {request as Api} from './index';
import {updateCustomerInfoData} from '@/models/customer';

export function getCart(){
    return Api.get('/cart');
}

export function getCustomer(customerInfo = updateCustomerInfoData){
    return Api.post('/cart/getCustomer', customerInfo);
}