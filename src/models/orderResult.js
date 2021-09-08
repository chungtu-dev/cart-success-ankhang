import {sexType,receiptMethodType} from '@/common/types';
import {transactionStatusType,transactionType} from '@/common/types/page-cart-result-types';

export const customerData = {
    name: '',
    phone: '',
    email: '',
    sex: sexType.male,
    address: '',
    fullAddress: '',
    provinceId: -1,
    provinceName: '',
    districtId: -1,
    districtName: '',
    wardId: -1,
    wardName: '',
}

export const getCartOrderResultData = {
    crmOrderId: -1,
    productGroupDelivery: [],
    storeId: -1,
    isShowPaymentMethod: false,
    isShowPaymentOnline: false,
    transactionType: transactionType.normal.code,
    transactionNoCRM: '',
    total: 0,
    discountValueTotal: 0,
    shippingCost: 0,
    deposit: 0,
    discountByCoupon: 0,
    customer: customerData,
    receiptMethod: receiptMethodType.undefined,
    transactionStatus: transactionStatusType.normal,
}