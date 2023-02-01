import {reactive} from "vue";

export const store = reactive({
    basket:[],
    count:0,
    totalPrice:0,
    addToBasket(product) {
        this.basket.push(product)
        this.totalPrice+=product.price
        this.count++
    }

})

