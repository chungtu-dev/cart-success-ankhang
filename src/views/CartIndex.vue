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
import EndSelectionOption from "../components/EndSelectionOption.vue";
import OrderInfo from "../components/OrderInfo.vue";
import PaymentSelection from "../components/PaymentSelection.vue";
import ProductOrder from "../components/ProductOrder.vue";
export default {
  components: {
    CartHeaderSuccess,
    OrderInfo,
    ProductOrder,
    PaymentSelection,
    EndSelectionOption,
  },
};
</script>

<style>
</style>