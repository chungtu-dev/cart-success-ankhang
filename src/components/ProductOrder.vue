<template>
  <div>
    <div>
      <product-in-list-order :products="productInList" :totalPrices="customerRecive"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductInListOrder from "@/common/components/box-order/ProductInListOrder.vue";
export default {
  components: {
    ProductInListOrder,
  },
  mounted() {
    // this.$store.dispatch("GetCustomerInfo");
    this.GetCustomerInfo();
    console.log("productInList", this.productInList);
  },
  computed: {
    ...mapGetters(["productInList","customerRecive"]),
  },
  methods: {
    ...mapActions(["GetCustomerInfo"]),
  },
};
</script>