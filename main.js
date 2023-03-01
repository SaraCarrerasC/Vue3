const app = Vue.createApp({
    data() {
        return {
            product: 'Sock',
            image:'./assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com',
            inStock: true,
            inventory:0,
            onSale: true
        }
    }
})
