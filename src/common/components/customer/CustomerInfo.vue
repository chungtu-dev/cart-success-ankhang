<template>
  <div>
    <div class="info-receiver">
      <div v-if="customerinfos">
        <p>
          <i></i>
          <span>
            Người nhận: {{this.genderCustomer}} {{ customerinfos.customerName }},
            {{ customerinfos.customerPhone }}            
            <br />
            <b>Nhận hàng tại nhà thuốc: </b>{{ customerreciver.addressRecive }}
          </span>
        </p>
        <p>
          <i></i>
          <span>Thời gian: <b>08h - 12h - Ngày mai</b> (16/11)</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { sexType } from "@/common/types";
export default {
  props: ["customerinfos", "customerreciver"],
  data() {
    return {
      model: {
        sex: sexType.undefined,
      },
    };
  },
  computed: {
    genderCustomer() {
      if (this.customerinfos.customerSex == 1) {
        return "Anh";
      } else if (this.customerinfos.customerSex == 2) {
        return "Chị";
      }
      return "Bạn";
      // return this.customerinfos.customerSex
    },
  },
};
</script>