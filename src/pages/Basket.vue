<script setup>
import {inject} from "vue";
const store = inject("store")

</script>

<template>
  <div class="basket_container">
    <div class="basket_head">BASKET: {{ store.totalPrice }}$</div>
    <div class="product_item__container" v-for="product in store.basket">
      <div class="product_item">
        <div class="product_item__left">{{product.name}}</div>
        <div class="product_item__right">
          {{product.price}}$ <button @click="store.removeFromBasket(product)">remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .basket_container{
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
  }
  .basket_head{
    font-size: 2rem;
    margin: 2rem 0;
  }
  .product_item{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
</style>
