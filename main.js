const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
            details: ['azul', 'puma']
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        }
    }
})