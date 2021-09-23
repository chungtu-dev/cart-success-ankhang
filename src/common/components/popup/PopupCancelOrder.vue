<template>
  <div class="popup-cancelod">
    <div class="bg-popup"></div>
    <div class="cancel-order">
      <i class="closepopup"></i>
      <p>
        NhathuocAnKhang.com mong nhận được góp ý của anh để cải thiện chất lượng
        dịch vụ tốt hơn!
      </p>
      <span v-for="item in listReason" :key="item.id" v-bind:class="{active: item.active}" @click="item.active =! item.active">
          <i class="ankhang-stick"></i>          
          {{item.text}}  
      </span>
      <textarea
        v-model="note"
        placeholder="Nhập nội dung góp ý"
      ></textarea>
      <div class="btn-popup">
        <a href="javascript:;" class="none-del"> KHÔNG HUỶ </a>
        <a href="javascript:;" class="accept-del" @click="removeOrderResult()">
          XÁC NHẬN <br />HUỶ ĐƠN HÀNG
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import { mapActions } from "vuex";
export default {
  data() {
    return {
        note: "",
        listReason: [
          { text: "Tôi không còn nhu cầu", active: false },
          { text: "Tôi muốn mua đơn hàng khác", active: false },
          { text: "Tôi tìm chỗ khác giá tốt hơn", active: false },
        ], 
    };
  },
  methods: {
    ...mapActions([c_types.REMOVE_ORDER_RESULT]),
    removeOrderResult() {       
      const textReason = this.listReason.filter(item => item.active === true)
      .reduce((prev, {text}) => prev + (prev ? " - ":"") + text, "");      
      this.REMOVE_ORDER_RESULT({
        note: this.note ? textReason + " - " + this.note : textReason,
      });
    },
  },
};
</script>

<style>
</style>