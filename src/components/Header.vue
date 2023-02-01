<script setup>
  import {inject} from "vue";
  const store = inject("store")

</script>

<template>
  <header>
    <div class="left-corner">
      <div class="navbar-brand"><router-link to="/"> Beka's Coffee House ☕ </router-link></div>
    </div>
    <div class="right-corner">
      <div>About</div>
      <div> <router-link to="/basket">🧺 {{store.count}} </router-link></div>
    </div>
  </header>
</template>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    padding: 2rem;
  }
  .left-corner{
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  .right-corner{
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .navbar-brand{
    font-size: 1.6rem;
  }
</style>
