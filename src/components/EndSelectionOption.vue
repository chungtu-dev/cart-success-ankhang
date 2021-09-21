<template>
  <div class="btn-cancel">
    <a
      href="javascript:;"
      class="click-hdh"
      @click="removeOrder(CUSTOMER_RECIVE.salesOrderId)"
      ><i></i>Hủy đơn hàng</a
    >
    <a href="https://staging.nhathuocankhang.com/html/v2.1/home.html"
      >Về trang chủ</a
    >
  </div>
</template>

<script>
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters([c_types.PRODUCT_IN_LIST, [c_types.CUSTOMER_RECIVE]]),
  },
  methods: {
    ...mapActions([
      c_types.REMOVE_ORDER_RESULT,
      [c_types.GET_CART_ORDER_RESULT],
    ]),
	removeOrder(salesOrderId) {
      this.REMOVE_ORDER_RESULT(salesOrderId);
      console.log(this.PRODUCT_IN_LIST);
    },
  },
};
</script>

<style>
</style>