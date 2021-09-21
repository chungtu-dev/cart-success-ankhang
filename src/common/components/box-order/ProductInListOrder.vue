<template>
  <div>
    <li v-for="a in PRODUCT_IN_LIST" :key="a.productId">
        <img :src="`${a.thumb}`" alt="img_empty" />
        <p>
          <span>{{ a.name }}</span>
          <!-- <span v-html="a.subStance"></span> -->
          <small> {{ formatCurrency(a.price) }}/{{ a.unitName }} </small>
        </p>
        <strong>
          {{ formatCurrency(a.totalPrice) }}
          <small>SL: {{ a.quantity }}</small>
        </strong>
      </li>
      <li class="total">
        <span>Tổng tiền hàng:</span>
        <strong>{{ formatCurrency(CUSTOMER_RECIVE.total) }}</strong>
      </li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import helper from "@/common/helper/index";
export default {
  computed: {
    ...mapGetters([c_types.PRODUCT_IN_LIST, [c_types.CUSTOMER_RECIVE]]),
  },
  methods: {
    formatCurrency(value) {
      return helper.formatCurrency(value);
    },
  },
};
</script>

<style>
</style>