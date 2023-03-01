const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Sock',
            image:'./assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com',
            inStock: false,
            inventory:0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        substractFromCart(){
            this.cart -= 1
        },
        updateImage(vaiantImage){
    this.image = vaiantImage
        }

    }
})
