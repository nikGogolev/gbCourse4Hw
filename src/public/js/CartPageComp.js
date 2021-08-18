const cartPageItem = {
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
		<div class="cart-box-item">
			<div class="cart-box-item-img-wrapper">
				<img class="cart-box-item-img" :src="'/img/'+item.image_src" alt="cart image">
			</div>
			<div class="cart-box-item-description">
				<h3 class="cart-box-item-description-heading">{{item.product_name}}</h3>
				<span class="cart-box-item-description-price">Price: <span
						class="cart-box-item-description-price-value">\${{item.product_price}}</span></span>
				<span class="cart-box-item-description-color">Color: <span
						class="cart-box-item-description-color-value">{{item.product_color}}</span></span>
				<span class="cart-box-item-description-size">Size: <span
						class="cart-box-item-description-size-value">{{item.product_size}}</span></span>
				<span class="cart-box-item-description-quantity">Quantity: {{item.quantity}}
				<button class="add-product-btn" @click="$root.$refs.cart.addProduct(item)"></button>
				<button class="remove-product-btn" @click="$root.$refs.cart.remove(item)"></button>
				</span>
			</div>
			<button class="cart-box-item-delete" @click="$root.$refs.cart.removeAll(item)">
				<svg class="cart-box-item-delete-icon" width="18" height="18">
					<use xlink:href="#close-icon"></use>
				</svg>
			</button>
		</div>`
};

const cartPage = {
	components:{cartPageItem},
	data(){
		return {
			cart:'',
		}
	},
	methods: {

	},
	mounted(){
		this.cart = this.$root.$refs.cart;

	},
	template:`
	<main>
        <section class="container breadcrumps">
            <div class="container-mini breadcrumps-wrapper">
                <h2 class="breadcrumps-heading">Shopping cart</h2>
            </div>
        </section>

        <section class="container cart">
		<div class="container-mini cart-wrapper">
		<div class="cart-box">
			<cart-page-item  v-for="item of this.cart.cartItems" :key="item.product_id" :item="item"></cart-page-item>
			<p>
			<div class="cart-box-buttons">
				<button class="cart-box-buttons-item" @click="$root.$refs.cart.clearCart">Clear shopping cart</button>
				<button class="cart-box-buttons-item">Continue shopping</button>
			</div>
		</div>
		<form class="cart-order">
			<div class="cart-order-form">
				<h3 class="cart-order-heading">Shipping address</h3>
				<input class="cart-order-country" name="country" type="text" placeholder="Bangladesh" required
					pattern="^[A-Za-zА-Яа-яЁё]+$">
				<input class="cart-order-state" name="state" type="text" placeholder="State" required
					pattern="^[A-Za-zА-Яа-яЁё]+$">
				<input class="cart-order-postcode" name="postcode" type="text" placeholder="Postcode / Zip"
					required pattern="[0-9]{6}">
				<input class="cart-order-quote" type="button" value="Get a quote">
			</div>
			<div class="cart-order-checkout">
				<span class="cart-order-checkout-sub">Sub total<span
						class="cart-order-checkout-sub-value">\${{this.cart.amount}}</span></span>
				<span class="cart-order-checkout-grand">Grand total<span
						class="cart-order-checkout-grand-value">\${{this.cart.amount}}</span></span>
				<hr class="cart-order-checkout-devider">
				<input class="cart-order-checkout-submit" type="submit" value="Proceed to checkout">
			</div>
		</form>
	</div>
        </section>

    </main>
		`
	

};

export default cartPage;
