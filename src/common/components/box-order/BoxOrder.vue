<template>
  <div class="box-order">
      <ListProductsInBoxOrder :listProduct="deliveryInfo.listProduct"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {receiptMethodType} from '@/common/types';
import ListProductsInBoxOrder from './ListProductsInBoxOrder.vue';
import {CUSTOMER_INFO_MODULE_NAME,
    SEX_STRING} from '@/store/module-types/page-cart/customerInfo'
export default {
    components:{
        ListProductsInBoxOrder
    },
    props: {
        deliveryInfo: {
            type: Object,
            required: true,
        },
        receiptMethod: {
            type: Number,
            required: false,
            default: receiptMethodType.undefined
        },
        cartType: {
            required: false,
            default: '',
        },
    },
    computed:{
        ...mapGetters(CUSTOMER_INFO_MODULE_NAME,[SEX_STRING]),
    }
}
</script>

<style>

</style>