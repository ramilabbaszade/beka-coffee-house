<script>
import data from '../assets/data.json'
import {store} from "../store.js";

export default {
    data(){
      return{
        products:data,
        store
      }
    },
  }
</script>

<template>
  <div class="main-page__container">
    <div class="main-page__container__head">
      <div>Tea</div>
      <div>Coffee</div>
      <div>Cakes</div>
    </div>
    <div class="cards">
      <div v-for="card in products"  class="card">
        <div class="card_image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Latte_and_dark_coffee.jpg" alt="">
        </div>
        <div class="card_text">{{card.name}} -  {{card.price}}$</div>
        <div class="card_btn" @click="store.addToBasket(card)">Add to basket</div>
      </div>
    </div>
  </div>
</template>

<style>
  .main-page__container{
  }
  .main-page__container__head{
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
  }
  .cards{
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 1rem;
  }
  .card{
    padding: .3rem;
    height: auto;
  }
  .card_image img{
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  .card_text{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  .card_btn{
    text-align: center;
    padding: 0.6rem 0;
    background: #c9b97f;
    border-radius: 1rem;
    width: 50%;
  }

  @media (min-width: 600px) {
    .cards { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 900px) {
    .cards { grid-template-columns: repeat(3, 1fr); }
  }
</style>
