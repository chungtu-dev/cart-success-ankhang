<template>
  <div>
    <section>
      <cart-header-success />
      <order-info />
      <product-order />
      <payment-selection />
      <end-selection-option />
    </section>
  </div>
</template>

<script>
import CartHeaderSuccess from "../components/CartHeaderSuccess.vue";
import OrderInfo from "../components/OrderInfo.vue";
import EndSelectionOption from "../components/EndSelectionOption.vue";
import PaymentSelection from "../components/PaymentSelection.vue";
import ProductOrder from "../components/ProductOrder.vue";

import * as c_types from "@/store/module-types/page-cart/customerInfo";
import { mapActions } from "vuex";

export default {
  components: {
    CartHeaderSuccess,
    OrderInfo,
    ProductOrder,
    PaymentSelection,
    EndSelectionOption,
  },
  mounted() {  
    console.log(this.GET_CART_ORDER_RESULT());
  },
  methods:{
    ...mapActions([c_types.GET_CART_ORDER_RESULT])
  },
};
</script>

<style>
</style>