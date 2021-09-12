<template>
  <div>
    <div class="info-receiver">
      <div>
        <p>
          <i></i>
          <span>
            Người nhận: {{customerinfo.customerName}}, {{customerinfo.customerPhone}}
            <br />
            <b>Nhận hàng tại nhà thuốc: </b>{{customerreciver.addressRecive}}
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
export default {
    props:['customerinfo','customerreciver']
};
</script>