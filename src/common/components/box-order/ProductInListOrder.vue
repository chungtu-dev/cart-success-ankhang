<template>
  <div class="info-order">
      <span class="text-od xemsp">Xem 3 sản phẩm đã đặt <i></i></span>
      <ul>
        <li v-for="a in products" :key="a.productId">
          <img
            :src="`${a.thumb}`"  
            alt="img_empty"
          />
          <p>
            <span>{{a.name}}</span>
            <span v-html="a.subStance"></span>
            <small> {{formatCurrency(a.price)}}/{{a.unitName}} </small>
          </p>
          <strong>
            {{formatCurrency(a.totalPrice)}}
            <small>SL: {{a.quantity}}</small>
          </strong>
        </li>
        <li class="total">
          <span>Tổng tiền hàng:</span>
          <strong>{{formatCurrency(totalPrices.total)}}</strong>
        </li>
      </ul>
      <span class="text-od">Tổng tiền: <b>{{formatCurrency(totalPrices.total)}}</b></span>
      <span class="text-od">Thanh toán <b>tiền mặt</b> khi nhận hàng</span>
    </div>
</template>

<script>
import helper from '@/common/helper/index'
export default {
    props:['products','totalPrices'],
    methods:{
      formatCurrency(value)
        {
            return helper.formatCurrency(value)
        },
    },
}
</script>

<style>

</style>