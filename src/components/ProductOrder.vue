<template>
  <div class="info-order">
    <span class="text-od xemsp"
      >Xem
      <span v-if="PRODUCT_IN_LIST && PRODUCT_IN_LIST.length > 0">{{PRODUCT_IN_LIST.length}}</span>
      sản phẩm đã đặt <i></i></span>
    <ul>
      <product-in-list-order />
    </ul>
    <span class="text-od"
      >Tổng tiền: <b>{{ formatCurrency(CUSTOMER_RECIVE.total) }}</b></span
    >
    <span class="text-od">Thanh toán <b>tiền mặt</b> khi nhận hàng</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import ProductInListOrder from "@/common/components/box-order/ProductInListOrder.vue";
import helper from "@/common/helper/index";
export default {
  components: {
    ProductInListOrder,
  }, 
  computed: {
    ...mapGetters([c_types.PRODUCT_IN_LIST, [c_types.CUSTOMER_RECIVE]]),
  },
  methods: {
    formatCurrency(value) {
      return helper.formatCurrency(value);
    },
  },

  created(){
    
  }
};
</script>