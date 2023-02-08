import {reactive} from "vue";

export const store = reactive({
    basket:[],
    count:0,
    totalPrice:0,
    addToBasket(product) {
        const randomNum = Math.floor(Math.random() * 1000)
        const newProduct = {...product, pId:randomNum}
        this.basket.push(newProduct)
        this.totalPrice+=product.price
        this.count++
    },
    removeFromBasket(product) {
        console.log(product)
        console.log(this.basket)
        this.basket = this.basket.filter(item=> item.pId !== product.pId)
        this.totalPrice-=product.price
        this.count--
    }

})

