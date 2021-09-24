<template>
  <div>
    <div class="popup-cancelod">
      <div class="bg-popup"></div>
      <div class="cancel-order">
        <i class="closepopup"></i>
        <p>
          NhathuocAnKhang.com mong nhận được góp ý của anh để cải thiện chất
          lượng dịch vụ tốt hơn!
        </p>
        <span v-for="item in listReason" :key="item.text">
          <i
            class="ankhang-stick"
            v-bind:class="{ active: item.active }"
            @click="item.active = !item.active"
          ></i>
          {{ item.text }}
        </span>
        <!-- <span v-for="item in listReason" :key="item.text">
      <div >
        <li>
          <input type="checkbox" v-model="item.active">
          {{item.text}}
        </li>
      </div>
    </span> -->
        <textarea v-model="note" placeholder="Nhập nội dung góp ý"></textarea>
        <div class="btn-popup">
          <a href="javascript:;" class="none-del"> KHÔNG HUỶ </a>
          <a
            href="javascript:;"
            class="accept-del"
            @click="removeOrderResult()"
          >
            XÁC NHẬN <br />HUỶ ĐƠN HÀNG
          </a>
        </div>
      </div>
    </div>
    <popup-waiting-close v-if="isCancelSuccess" />
  </div>
</template>
<script>
import * as c_types from "@/store/module-types/page-cart/customerInfo";
import { mapActions } from "vuex";
import PopupWaitingClose from "@/common/components/popup/PopupWaitingClose.vue";
export default {
  components: { PopupWaitingClose },
  data() {
    return {
      isCancelSuccess: false,
      isShowPopupCancel: false,
      note: null,
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
      const textReason =
        this.note +
        " - " +
        this.listReason
          .filter((el) => el.active === true)
          .reduce((prev, { text }) => prev + (prev ? " - " : "") + text, "");
      console.log("Lý do hủy đơn", textReason);
      this.REMOVE_ORDER_RESULT({
        note: this.note ? textReason + " - " + this.note : textReason,
      });
      this.isCancelSuccess = true;
    },

    // handleSubmit(){
    //   let reasonIsTrue = this.listReason.filter(e => e.active === true);
    //   let temp="";
    //   reasonIsTrue.forEach(e =>{
    //     if(temp != ''){
    //       temp = `${temp} - ${e.text}`
    //     }
    //     else{
    //       temp = e.text
    //     }
    //     console.log(temp, this.note)
    //   })
    // },
  },
};
</script>

<style>
</style>