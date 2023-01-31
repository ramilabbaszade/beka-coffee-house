<template>
  <header>
    <div class="left-corner">
      <div class="navbar-brand">Beka's Coffee House ☕</div>
      <div class="left-corner__list">
        <div>MENU</div>
        <div>DELIVERY</div>
        <div>CAREER</div>
      </div>
    </div>
    <div class="right-corner">
      <div>🏠</div>
      <div>🧺 2</div>
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
    gap: 1rem;
  }
  .left-corner__list{
    display: flex;
    gap: 1rem;
  }
  .navbar-brand{
    font-size: 1.6rem;
  }
</style>
