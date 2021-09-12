import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import CustomerInfo from './modules/page-cart-result/customerInfo';

export default new Vuex.Store({
    modules:{
        CustomerInfo
    }
})
