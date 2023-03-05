app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
        },
        template:
        /*html*/
            `   <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img alt="blue-socks" :src="image"  :class="{'out-of-stock-img': !inStock}">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>

            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{backgroundColor: variant.color}"></div>

            <button class="button" @click="addToCart"  :disabled="!inStock"  :class="{disabledButton: !inStock}">Add to Cart</button>
            <button class="button"  @click="deleteFromCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Delete From Cart</button>
          </div>

          <a :href="url">Code Mastery</a>
        </div>
      </div>`,
        data() {
            return {
                product: 'Sock',
                brand: 'Vue Mastery',
                selectedVariant:0,
                url: 'https://www.vuemastery.com',
                inventory:0,
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' , quantity: 50},
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',  quantity: 0 },
                ]
            }
        },
        methods: {
            addToCart(){
                //this.cart += 1
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
                console.log(this.variants[this.selectedVariant].id)
            },
            deleteFromCart(){
                this.$emit('delete-from-cart', this.variants[this.selectedVariant].id)
            },
            substractFromCart(){
                this.cart -= 1
            },
            updateVariant(index){
                this.selectedVariant= index
                console.log(index)
            }

        },
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            sale(){
                return this.brand +" "+ this.product
            },
            shipping() {
                if (this.premium) {
                    return 'Free'
                }
                return 2.99
            }

    }
})