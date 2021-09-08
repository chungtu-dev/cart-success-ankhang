import {receiptMethodType} from '@/common/types';
import {isEmptyOrNil,isNullOrUndefined} from '@/common/function';
// import * as or_types from '../../module-types/page-cart-result/orderResult';
import * as or_types from '@/store/module-types/page-cart-result/orderResult';
import {getCartOrderResultData} from '@/models/orderResult';
import {getSexString} from '@/common/function/page-cart-result-functions';

export default {
    state:{
        orderResult:{
            total: 6020000,
            ...getCartOrderResultData,
        }
    },
    getters:{
        [or_types.CUSTOMER_INFO](state){
            return{
                sex: getSexString(state.orderResult?.customer?.sex),
                name: state.orderResult?.customer?.name,
            };
        },
        [or_types.TOTAL_MONEY_RESULT](state){
            return state.orderResult?.total;
        },
        [or_types.CUSTOMER_SEX_STRING](state){
            return getSexString(state.orderResult?.customer?.sex);
        },
        [or_types.ORDER_INFO](state, getters){
            let result = [];
            //#region người đặt hàng
            if(isNullOrUndefined(state.orderResult?.customer)===false){
                const customerSex = getSexString(state.orderResult?.customer?.sex);
                const customerInfo = state.orderResult?.customer?.name + ', ' + state.orderResult?.customer?.phone;
                result.push({ key: getters[or_types.HAS_ANOTHER_RECEIVER] === true ? ('Người đặt:') : ('Người nhận:'), value: `${customerSex} ${customerInfo}` });
            }
            //#endregion

            //#region người nhận
            if(getters[or_types.HAS_ANOTHER_RECEIVER]===true){
                const receiverSex = getSexString(state.orderResult?.customerReceive?.sex);
                const receiverInfo = state.orderResult?.customerReceive?.name+', '+state.orderResult?.customerReceive?.phone;
                result.push({key:'Người nhận hàng:', value:`${receiverSex} ${receiverInfo}`});
            }
            //#endregion

            //#region địa chỉ nhận
            const isReceiveAtStore = state.orderResult?.receiptMethod === receiptMethodType.inStore;
            if(isReceiveAtStore === true){
                result.push({
                    key:'Nhận hàng tại siêu thị:',
                    value: state.orderResult?.storeAddress+'.'
                });
            } else {
                result.push({
                    key:'Giao đến:',
                    value: state.orderResult?.customer?.fullAddress + ' (nhân viên sẽ gọi xác nhận trước khi giao).',
                })
            }
            //#endregion
        }
    }
}