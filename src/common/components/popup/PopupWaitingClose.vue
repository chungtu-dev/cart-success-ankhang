<template>
  <div class="popup-delfn">
		<div class="bg-popup"></div>
		<div class="dl-order">
			<i class="closepopup"></i>
			<strong>HUỶ ĐƠN HÀNG THÀNH CÔNG</strong>
			<p>
				Cảm ơn {{CUSTOMER_INFO.customerSex}} {{CUSTOMER_INFO.customerName}} đã đóng góp để giúp nhà thuốc AnKhang cải tiến chất lượng dịch vụ tốt hơn! 
			</p>
			<!-- <button @click="closePopupCancel">ĐÓNG</button> -->
            <a href="javascript:;" @click="closePopupCancel">ĐÓNG</a>
			<small>Tự động đóng trong {{countTemp}} giây</small>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as c_types from "@/store/module-types/page-cart/customerInfo";
export default {
    data(){
        return{
            isClosePopupCancel:false,
            countTemp: 5,
        }
    },
    computed:{ 
        ...mapGetters([c_types.CUSTOMER_INFO]),
    },
    methods: {
        closePopupCancel(){
            this.countDown();
            this.isClosePopupCancel = false;
            window.location.href = "https://staging.nhathuocankhang.com/html/v2.1/home.html";
        },    
        countDown(){
            if(this.countTemp > 0){
                setTimeout(()=>{
                    this.countTemp -= 1;
                    this.countDown();
                },1000)
            }
            else{
                window.location.href="https://staging.nhathuocankhang.com/html/v2.1/home.html";
            }
        },
    },
    created(){
        this.countDown()
    }
}
</script>

<style>

</style>