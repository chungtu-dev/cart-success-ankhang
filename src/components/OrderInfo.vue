<template>
  <div class="info-receiver">
    <div v-if="CUSTOMER_INFO">
      <p>
        <i></i>
        <span>
          Người nhận:
          {{this.genderCustomer}}
          {{ CUSTOMER_INFO.customerName }},
          {{ CUSTOMER_INFO.customerPhone }}
          <br />
          <b>Nhận hàng tại nhà thuốc: </b> {{CUSTOMER_RECIVE.addressRecive}}
        </span>
      </p>
      <p>
        <i></i>
        <span>Thời gian: <b>{{CUSTOMER_RECIVE.timeReviceFormat}}</b></span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import OrderInfo from "@/common/components/customer/CustomerInfo.vue";
export default {
  components: {
    OrderInfo,
  },
  computed: {
    ...mapGetters([c_types.CUSTOMER_INFO,[c_types.CUSTOMER_RECIVE]]),
    genderCustomer() {
      if (this.CUSTOMER_INFO.customerSex == 1) {
        return "Anh";
      } else if (this.CUSTOMER_INFO.customerSex == 2) {
        return "Chị";
      }
      return "Bạn";
    },
  },
  // methods:{
  //   ...mapActions([c_types.GET_CART_ORDER_RESULT])
  // },
  // mounted() {  
  //   console.log(this.GET_CART_ORDER_RESULT());
  // }
};
</script>