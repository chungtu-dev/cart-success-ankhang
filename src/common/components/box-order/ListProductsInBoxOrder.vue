<template>
  <ul>
      <li v-for="(product, index) in listProduct" :key="index">
        <a :href="product.url" target="_blank" class="img-order">
            <img :data-src="product.thumbnail" :src="product.thumbnail" loading="lazy" class="lazyload">
        </a>
        <div class="text-order">
            <a class="text-order__product-name" :href="product.url" target="_blank">{{product.name}}</a>
            <div class="amount-color">
                <small v-if="$isEmptyOrNil(product.colorName)===false">Màu: <small>{{product.colorName}}</small></small>
                <small>Số lượng: {{product.quantity}}</small>
            </div>
        </div>
      </li>
  </ul>
</template>

<script>
export default {
    props:{
        listProduct:{
            required:false,
            default:()=>[],
        }
    }
}
</script>

<style>

</style>