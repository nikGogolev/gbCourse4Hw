

const product = {
	props: ['product'],
	data() {
		return {

		}
	},
	methods: {

	},
	mounted() {

	},
	template: `
		<div class="featured-items-box-item">
			<div class="featured-items-box-item-image wrapper">
				<img :src="'/img/'+product.image_src" alt="catalog image"
					class="featured-items-box-item-image-pic">
				<div class="featured-items-box-item-image-smooth">
					<button class="addtocart-button" @click="$root.$refs.cart.addProduct(product)">
						<svg class="addtocart-button-icon" width="27" height="25">
							<use xlink:href="#addtocart-icon"></use>
						</svg>
						<span class="addtocart-button-text">Add to Cart</span>
					</button>
				</div>
			</div>

			<h3 class="featured-items-box-item-heading"><router-link :to="'/pageProduct/'+product.product_id"  class="featured-items-box-item-link">{{product.product_name}}</router-link></h3>
			<p class="featured-items-box-item-text">{{product.product_description}}</p>
			<p class="featured-items-box-item-heading">Size: {{product.product_size}}</p>
			<p class="featured-items-box-item-cost">\${{product.product_price}}</p>
		</div>`
};

const catalog = {
	props: ['productsnumber'],
	components: { product },
	data() {
		return {
			allProducts: [],
			products: [],
		}
	},
	methods: {
		chooseNRandomGoods(n) {
			let tempSet = new Set();
			while (tempSet.size < n) {
				let randomId = Math.ceil(Math.random() * this.allProducts.length);
				let random = this.allProducts.find(item => item.product_id === randomId);
				tempSet.add(random);
			}
			this.products = Array.from(tempSet);
		},
		currentProduct(product, event) {
			this.$root.putJson('/api/products/current', product)
				.then(data => {
					if (data.result === 1) {
						document.location.href = 'product.html';
						console.log(event);

					} else {
						this.$root.$refs.error.setError('Ошибка');
					}
				});

		}
	},
	mounted() {
		this.$root.getJson('/api/products')
			.then(data => {
				this.allProducts = data;
				this.chooseNRandomGoods(this.productsnumber);
				this.$root.$refs.search.mainFilter();
			});
		
	},
	template: `
		<div class="featured-items-box">
			<product v-for="item of $root.$refs.search.filtered" :key="item.product_id" :product="item"></product>
		</div>`
};

export default catalog;
