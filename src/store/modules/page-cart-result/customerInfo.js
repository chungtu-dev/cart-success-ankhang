import axios from "axios";
const url = `https://staging.nhathuocankhang.com/api/CartTest/GetCartOrderResult?crmOrderId=47395316&phone=0353191379`;
const url_local = `http://localhost:3000/AKdata`

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
                // const response = await axios.get(url+`GetCartOrderResult?crmOrderId=47395316&phone=0353191379`)
                 const response = await axios.get(url_local)
                 commit("GET_CUSTOMER_INFO", response.data.data)
                //  console.log('acca',response.data.data);
            } catch (error) {
                console.log("Error", error);
            }
        },
    },
}
