import { getCart, DeleteOrder } from '@/api/cart'
import * as c_types from '@/store/module-types/page-cart/customerInfo'
import {isNullOrUndefined} from '@/common/function'
import {getSexString} from '@/common/function/page-cart-result-functions'

export default {
    state: {
        customerInfo: [], // mảng rỗng
    },
    getters: {        

        [c_types.CUSTOMER_INFO](state){
            let result = {
                customerName:"",
                customerPhone:"",
                customerSex:"",
            };
            if(isNullOrUndefined(state.customerInfo.customer) === false) {
                result.customerSex = getSexString(state.customerInfo.customer.customerSex);
                result.customerName = state.customerInfo.customer.customerName;
                result.customerPhone = state.customerInfo.customer.customerPhone;
            }
            return result;
        },

        [c_types.CUSTOMER_RECIVE](state){
            let result = {
                addressRecive:"",
                timeReviceFormat:"",
                total:"",
            };
            if(isNullOrUndefined(state.customerInfo) === false) {
                result.addressRecive = state.customerInfo.addressRecive;
                result.timeReviceFormat = state.customerInfo.timeReviceFormat;
                result.total = state.customerInfo.total;
            }
            return result;
        },

        // [c_types.CUSTOMER_INFO](state) {
        //     return state.customerInfo.customer;
        // },
        // [c_types.CUSTOMER_RECIVE](state) {
        //     return state.customerInfo;
        // },
        
        [c_types.PRODUCT_IN_LIST](state) {
            return state.customerInfo.listProductCart;
        },
    },
    mutations: {
        [c_types.CUSTOMER_INFO_MODULE_NAME](state, { value }) {
            state.customerInfo = value;
        },
    },
    actions: {
        [c_types.GET_CART_ORDER_RESULT]({ commit }) {
            return new Promise((resolve, reject) => {
                getCart()
                    .then((response) => {
                        commit(`${c_types.CUSTOMER_INFO_MODULE_NAME}`, { value: response.data.data });
                        // commit(c_types.CUSTOMER_INFO_MODULE_NAME,{value: response.data.data});
                        resolve();
                    }).catch((error) => {
                        reject(error);
                    });
            });
        },

        [c_types.REMOVE_ORDER_RESULT]({commit}, salesOrderId){
            return new Promise((resolve, reject)=>{
                DeleteOrder()
                .then(()=>{
                    commit(c_types.CUSTOMER_INFO_MODULE_NAME + salesOrderId);
                    resolve();
                }).catch(error=>{
                    reject(error);
                })
            });
        },
    },
}