<template>
  <div class="popup-delfn">
		<div class="bg-popup"></div>
		<div class="dl-order">
			<i class="closepopup"></i>
			<strong>HUỶ ĐƠN HÀNG THÀNH CÔNG</strong>
			<p>
				Cảm ơn anh Nghiêng đã đóng góp để giúp nhà thuốc AnKhang cải tiến chất lượng dịch vụ tốt hơn! 
			</p>
			<button @click="closePopupCancel">ĐÓNG</button>
			<small>Tự động đóng trong {{countTemp}} giây</small>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            isClosePopupCancel:false,
            countTemp: 5,
        }
    },
    methods: {
        closePopupCancel(){
            this.countDown();
            this.isClosePopupCancel = false;
            window.location.href = "/";
        },

        countDown(){
            if(this.countTemp > 0){
                setTimeout(()=>{
                    this.countTemp -= 1;
                    this.countDown();
                },1000)
            }
            else{
                window.location.href="/";
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