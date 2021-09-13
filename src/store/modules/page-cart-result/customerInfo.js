import axios from "axios";

export default{
    state:{
        // customerInfo:null,
        customerInfo:[],
    },
    getters:{
        customerInfo: state => state.customerInfo.customer,
        customerRecive: state => state.customerInfo,
        productInList: state => state.customerInfo.listProductCart,
    },
    mutations:{
        GET_CUSTOMER_INFO(state,customerInfo){
            state.customerInfo = customerInfo;
        }
    },
    actions:{
        async GetCustomerInfo({commit}){
            try {
                //  const response = await axios.get('https://staging.nhathuocankhang.com/api/CartTest/GetCartOrderResult?crmOrderId=48374478&phone=0981212121')
                 const response = await axios.get('http://localhost:3000/AKdata')
                 commit("GET_CUSTOMER_INFO", response.data.data)
                //  console.log('acca',response.data.data);
            } catch (error) {
                console.log("Error", error);
            }
        },
    },
}
