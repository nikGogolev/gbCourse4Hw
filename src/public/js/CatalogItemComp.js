import productChoose from './ProductChooseComp'

const catalogItem = {
    components:{
        productChoose
    },
	props: ['productId'],
	data(){
		return {
			product: {},
			productCount: 0,
		}
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
					
                    <product-choose ref="product-choose"></product-choose>
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