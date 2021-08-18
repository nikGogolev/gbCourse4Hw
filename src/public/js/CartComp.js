const cartItem = {
	props: ['item'],
	data(){
		return {

		}
	},
	methods: {
		
	},
	mounted(){
		
	},
	template:`
		<div class="cart-item">
			<div class="product-bio">
				<img :src="'/img/'+item.image_src" alt="Some image">
				<div class="product-desc">
					<p class="product-title">{{item.product_name}}</p>
					<p class="product-quantity">Количество: {{item.quantity}}</p>
					<p class="product-single-price">\${{item.product_price}} за ед.</p>
				</div>
			</div>
			<div class="right-block">
				<p class="product-price">{{item.quantity*item.product_price}} $</p>
				<button class="del-btn" @click="$root.$refs.cart.remove(item)">&times;</button>
			</div>
		</div>`
};

const cart = {
	components:{cartItem},
	data(){
		return {
			countGoods: 0,
			amount: 0,
			cartItems: [],
			isInsvisible: true,
		}
	},
	methods: {
		addProduct(product) {
            let find = this.cartItems.find(el => el.product_id === product.product_id);
            if (find) {
                this.$root.putJson(`/api/cart/${find.product_id}`, { quantity: 1 })
				.then(data => {
					if (data.result === 1){
						find.quantity++;
						this.amount += find.product_price;
					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$root.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
							this.countGoods++;
							this.amount += product.product_price;
                        } else {
							this.$root.$refs.error.setError('Ошибка');
						}
                    });
            }
        },
        remove(item) {
            if (item.quantity > 1) {
                this.$root.putJson(`/api/cart/${item.product_id}`, { quantity: -1 })
				.then(data => {
					if (data.result === 1){
						item.quantity--;
						this.amount -= item.product_price;
					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});
            } else {
                this.$root.deleteJson(`/api/cart`, item)
				.then(data => {
					if (data.result === 1){
						console.log()
						this.cartItems.splice(this.cartItems.indexOf(item), 1);
						this.countGoods--;
						this.amount -= item.product_price;
					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});
            }
        },
		removeAll(item) {
                this.$root.deleteJson(`/api/cart`, item)
				.then(data => {
					if (data.result === 1){
						console.log()
						this.cartItems.splice(this.cartItems.indexOf(item), 1);
						this.countGoods--;
						this.amount -= item.product_price*item.quantity;
					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});
        },
		clearCart() {
			this.cartItems.forEach((item) => {
				this.$root.deleteJson(`/api/cart`, item)
				.then(data => {
					if (data.result === 1){
						console.log()
						this.cartItems.splice(this.cartItems.indexOf(item), 1);
						this.countGoods--;
						this.amount -= item.product_price*item.quantity;
					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});
			});

        },
		showHideCart(){
			this.isInsvisible = !this.isInsvisible;
		},
	},
	mounted(){
		this.$root.getJson('/api/cart')
            .then(data => {
				this.countGoods = data.countGoods;
				this.amount = data.amount;
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
	},
	template:`
		<li class="menu-list-item">
			<a href="cart.html" @click.prevent="$root.$refs.cart.showHideCart" class="menu-list-item-cart">
				<svg class="menu-list-item-cart-icon" width="43" height="39">
					<use x="0" y="10" xlink:href="#cart-icon"></use>
					<circle class="menu-list-item-cart-icon-contain" cx="33" cy="10" r="10"/>
					<text class="menu-list-item-cart-icon-text" x="30" y="14" fill="#ffffff">{{countGoods}}</text>
				</svg>
			</a>
			<div class="cart-block" v-bind:class="{invisible: isInsvisible}">
				<cart-item v-for="item of cartItems" :key="item.product_id" :item="item"></cart-item>
				<div v-if="!cartItems.length">Корзина пуста</div>
				<router-link class="featured-items-more-button" to="/cartPage">Перейти в корзину</router-link>
			</div>
        </li>
		`
};



export default cart;
