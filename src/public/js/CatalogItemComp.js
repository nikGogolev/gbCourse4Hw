const catalogItem = {
	props: ['productId'],
	data(){
		return {
			product: {},
			productCount: 0,
		}
	},
	methods: {
		
	},
	computed: {
		nextItem: function(){
			if ((this.product.product_id + 1) > this.productCount)
			{
				return 1;
			} else {
				return (this.product.product_id + 1);
			}
		},
		
		prevItem: function(){
			if ((this.product.product_id - 1) < 1)
			{
				return this.productCount;
			} else {
				return (this.product.product_id - 1);
			}
		}
	},
	created(){
		this.$root.getJson('/api/products')
		.then(data => {
            const find = data.find(el => el.product_id === +this.productId);
			this.product = find;
			this.productCount = data.length;
		});
        
	},
    beforeRouteEnter(to, from, next) {
    },
	template:`
		<div>
        <section class="container product-image">
			<router-link :to="'/pageProduct/'+prevItem">
            <button class="product-image-prev">
                <svg class="product-image-prev-icon" width="13" height="23">
                    <use width="13" height="23" xlink:href="#arrow-left-icon"></use>
                </svg>
            </button>
			</router-link>
			<router-link :to="'/pageProduct/'+nextItem">
            <button class="product-image-next">
                <svg class="product-image-next-icon" width="13" height="23">
                    <use width="13" height="23" xlink:href="#arrow-right-icon"></use>
                </svg>
            </button>
			</router-link>
            <div class="product-image-wrapper">
                <img :src="'/img/'+product.image_src" alt="product image" class="product-image-img">
            </div>

        </section>
        <section class="container product">
            <div class="container-mini product-wrapper">
                <article class="product-item">
                    <div class="product-item-title">
                        <h2 class="product-item-title-heading">{{product.collection}} collection</h2>
                        <p class="product-item-title-text">{{product.product_name}}</p>
                    </div>
                    <p class="product-item-description">{{product.product_description}}</p>
                    <p class="product-item-cost">\${{product.product_price}}</p>
                    <hr class="product-item-devider">
					
                    <form action="product.html" class="product-item-choose">
                        <div class="product-item-choose-wrapper">
                            <input type="checkbox" id="choose-color-btn" class="product-item-choose-color-btn">
                            <label for="choose-color-btn" class="product-item-choose-color-label">
                                <span class="product-item-choose-color-label-text">Choose color</span>
                                <svg class="product-item-choose-color-label-icon" width="11" height="6">
                                    <use xlink:href="#arrow-down-icon"></use>
                                </svg>
                            </label>
                            <div class="product-item-choose-color-options">
                                <label for="choose-color-item1"><input type="radio" name="choose-color"
                                        id="choose-color-item1" class="product-item-choose-color-options-item">Цвет 1</label>
                                <label for="choose-color-item2"><input type="radio" name="choose-color"
                                        id="choose-color-item2" class="product-item-choose-color-options-item">Цвет
                                    2</label>
                                <label for="choose-color-item3"><input type="radio" name="choose-color"
                                        id="choose-color-item3" class="product-item-choose-color-options-item">Цвет
                                    3</label>
                                <label for="choose-color-item4"><input type="radio" name="choose-color"
                                        id="choose-color-item4" class="product-item-choose-color-options-item">Цвет
                                    4</label>
                            </div>
                        </div>
                        <div class="product-item-choose-wrapper">
                            <input type="checkbox" id="choose-size-btn" class="product-item-choose-size-btn">
                            <label for="choose-size-btn" class="product-item-choose-size-label">
                                <span class="product-item-choose-size-label-text">Choose size</span>
                                <svg class="product-item-choose-size-label-icon" width="11" height="6">
                                    <use xlink:href="#arrow-down-icon"></use>
                                </svg>
                            </label>
                            <div class="product-item-choose-size-options">
                                <label for="choose-size-item1"><input type="radio" name="choose-size"
                                        id="choose-size-item1" class="product-item-choose-size-options-item">XS</label>
                                <label for="choose-size-item2"><input type="radio" name="choose-size"
                                        id="choose-size-item2" class="product-item-choose-size-options-item">S</label>
                                <label for="choose-size-item3"><input type="radio" name="choose-size"
                                        id="choose-size-item3" class="product-item-choose-size-options-item">M</label>
                                <label for="choose-size-item4"><input type="radio" name="choose-size"
                                        id="choose-size-item4" class="product-item-choose-size-options-item">L</label>
                            </div>
                        </div>
                        <div class="product-item-choose-wrapper">
                            <input type="checkbox" id="choose-quantity-btn" class="product-item-choose-quantity-btn">
                            <label for="choose-quantity-btn" class="product-item-choose-quantity-label">
                                <span class="product-item-choose-quantity-label-text">Quantity</span>
                                <svg class="product-item-choose-quantity-label-icon" width="11" height="6">
                                    <use xlink:href="#arrow-down-icon"></use>
                                </svg>
                            </label>
                            <div class="product-item-choose-quantity-options">
                                <label for="choose-quantity-item1"><input type="radio" name="choose-quantity"
                                        id="choose-quantity-item1" class="product-item-choose-quantity-options-item">1</label>
                                <label for="choose-quantity-item2"><input type="radio" name="choose-quantity"
                                        id="choose-quantity-item2" class="product-item-choose-quantity-options-item">2</label>
                                <label for="choose-quantity-item3"><input type="radio" name="choose-quantity"
                                        id="choose-quantity-item3" class="product-item-choose-quantity-options-item">3</label>
                                <label for="choose-quantity-item4"><input type="radio" name="choose-quantity"
                                        id="choose-quantity-item4" class="product-item-choose-quantity-options-item">4</label>
                                <label for="choose-quantity-item5"><input type="radio" name="choose-quantity"
                                        id="choose-quantity-item5" class="product-item-choose-quantity-options-item">5</label>
                            </div>
                        </div>
                    </form>
                    <button class="product-item-add-to-cart"  @click="$root.$refs.cart.addProduct(product)">
                        <svg class="product-item-add-to-cart-icon" width="27" height="25">
                            <use xlink:href="#addtocart-icon"></use>
                        </svg>
                        <span class="product-item-add-to-cart-text">Add to Cart</span>
                    </button>
                </article>
            </div>
        </section>
		</div>`
};

export default catalogItem;