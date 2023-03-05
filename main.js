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
        },
        deleteFromCart(id){
            const index = this.cart.indexOf(id)
                if (index > -1) {
                    this.cart.splice(index, 1)
                }
        }
    }
})