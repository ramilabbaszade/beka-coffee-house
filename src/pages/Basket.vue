<script setup>
import {inject} from "vue";
const store = inject("store")

</script>

<template>
  <div>
    <div v-for="product in store.basket">
      {{product.name}}
    </div>
  </div>
</template>

<style>

</style>
