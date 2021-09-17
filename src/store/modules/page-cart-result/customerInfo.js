import {getCart} from '@/api/cart'
import * as c_types from '@/store/module-types/page-cart/customerInfo'

export default{
    state:{        
        customerInfo:[],
    },
    getters:{
        [c_types.CUSTOMER_INFO](state){
            return state.customerInfo.customer;
        },
        [c_types.CUSTOMER_RECIVE](state){
            return state.customerInfo;
        },
        [c_types.PRODUCT_IN_LIST](state){
            return state.customerInfo.listProductCart;
        },
    },
    mutations:{
        [c_types.CUSTOMER_INFO_MODULE_NAME](state,{value}){
            state.customerInfo = value;
        },
    },
    actions:{
        [c_types.GET_CART_ORDER_RESULT]({commit}){
            return new Promise((resolve, reject)=>{
                getCart()
                .then((response)=>{
                    commit(`${c_types.CUSTOMER_INFO_MODULE_NAME}`,{value: response.data.data});
                    // commit(c_types.CUSTOMER_INFO_MODULE_NAME,{value: response.data.data});
                    resolve();
                }).catch((error)=>{
                    reject(error);
                });
            });
        }
    },
}