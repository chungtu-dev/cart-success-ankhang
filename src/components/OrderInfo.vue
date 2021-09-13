<template>
  <div>
    <order-info :customerinfos="customerInfo" :customerreciver="customerRecive"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import OrderInfo from '@/common/components/customer/CustomerInfo.vue'
export default {
  components:{
    OrderInfo
  },  
    mounted() {
        // this.$store.dispatch('GetCustomerInfo');
        this.GetCustomerInfo();
    },
    computed:{
        ...mapGetters(['customerInfo','customerRecive']),        
    },
    methods:{
        ...mapActions(['GetCustomerInfo']),
    },
}
</script>