const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
	basketUrl: '/getBasket.json',
	allProducts: [],
    products: [],
	cartItems: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
	cartImgCatalog: 'https://via.placeholder.com/50x100',
	isInsvisible: true,
	searchLine: '',
	isCartEmpty: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
          .then(result => result.json())
          .catch(error => {
            console.log(error);
          })
    },
    addProduct(product){
		console.log(product);
		this.getJson(`${API}/addToBasket.json`)
			.then(data => {
				if(data.result === 1){
					let find = this.cartItems.find(item => item.id_product === product.id_product);
					if (find){
						find.quantity++;
					} else {
						let newProduct = {
							id_product: product.id_product,
							price: product.price,
							product_name: product.product_name,
							quantity: 1
						};
						this.cartItems.push(newProduct);
						this.isCartEmpty = false;
					}
				} else {
					alert('Error');
				}
			})
    },
	removeProduct(product){
		this.getJson(`${API}/deleteFromBasket.json`)
			.then(data => {
			if(data.result === 1){
				let find = this.cartItems.find(item => item.id_product === product.id_product);
				if(product.quantity > 1){
					product.quantity--;
				} else {
					this.cartItems.splice(this.cartItems.indexOf(product), 1);
					if (this.cartItems.length === 0) {this.isCartEmpty = true;};
					
				}
			} else {
				alert('Error');
			}
		})
	},
	showHideCart(){
		this.isInsvisible = !this.isInsvisible;
	},
	filterGoods(value){
		const regexp = new RegExp(value, 'i');
		this.products = this.allProducts.filter(product => regexp.test(product.product_name));
	},
  },
  beforeCreated() {

  },
  created() {
    this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          this.allProducts = data;
		  this.filterGoods('');
        });
	this.getJson(`${API + this.basketUrl}`)
        .then(data => {
          this.cartItems = data.contents;
        });
	
  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
});
