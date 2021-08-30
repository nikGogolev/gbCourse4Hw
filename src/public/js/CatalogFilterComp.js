const catalogFilter = {
	data() {
		return {
			trendingNow: false,
			size: false,
			price: false,
		}
	},
	methods: {
		openCloseTrendingNow(){
			this.size = false;
			this.price = false;
		},
		openCloseSize(){
			this.trendingNow = false;
			this.price = false;
		},
		openClosePrice(){
			this.size = false;
			this.trendingNow = false;
		}
	},
	template: `
			<div class="catalog-filter">
			
				<input id="catalog-filter-open-btn" class="catalog-filter-open-btn" type="checkbox">
				<label for="catalog-filter-open-btn" class="catalog-filter-open-label">
					<span class="catalog-filter-open-label-text">Filter</span>
					<svg class="catalog-filter-open-label-icon" width="15" height="10">
						<use xlink:href="#filter-icon"></use>
					</svg>
				</label>
				
				<ul class="catalog-filter-list">
					<li class="catalog-filter-list-item">
						<input type="checkbox" id="catalog-filter-list-item-category-open" class="catalog-filter-list-item-open-btn category" checked>
						<label for="catalog-filter-list-item-category-open" class="catalog-filter-list-item-open-label category">Category</label>
						<ul class="catalog-filter-list-item-sublist category">
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Accessories</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Bags</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Denim</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Hoodies & Sweatshirts</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Jackets & Coats</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Polos</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Shirts</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Shoes</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Sweaters & Knits</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">T-Shirts</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Tanks</a></li>
						</ul>
					</li>
					<li class="catalog-filter-list-item">
						<input type="checkbox" id="catalog-filter-list-item-brand-open" class="catalog-filter-list-item-open-btn brand">
						<label for="catalog-filter-list-item-brand-open" class="catalog-filter-list-item-open-label brand">Brand</label>
						<ul class="catalog-filter-list-item-sublist brand">
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Brand1</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Brand2</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Brand3</a></li>
						</ul>
					</li>
					<li class="catalog-filter-list-item">
						<input type="checkbox" id="catalog-filter-list-item-designer-open" class="catalog-filter-list-item-open-btn designer">
						<label for="catalog-filter-list-item-designer-open" class="catalog-filter-list-item-open-label designer">Designer</label>
						<ul class="catalog-filter-list-item-sublist designer">
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Designer1</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Designer2</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Designer3</a></li>
							<li class="catalog-filter-list-item-sublist-item"><a class="catalog-filter-list-item-sublist-item-link" href="#">Designer4</a></li>
						</ul>
					</li>
				</ul>
				
				<form action="catalog.html" class="catalog-category">
					<div class="catalog-category-wrapper catalog-category-trending-now">
						<input type="checkbox" id="catalog-category-trending-now-btn" class="catalog-category-trending-now-btn" v-model="trendingNow" @click="openCloseTrendingNow">
						<label for="catalog-category-trending-now-btn" class="catalog-category-trending-now-label">
							<span class="catalog-category-trending-now-label-text">Trending now</span>
							<svg class="catalog-category-trending-now-label-icon" width="11" height="6">
								<use xlink:href="#arrow-down-icon"></use>
							</svg>
						</label>
						<div class="catalog-category-trending-now-options">
							<label for="catalog-category-trending-now-item1"><input type="checkbox"
									id="catalog-category-trending-now-item1" class="catalog-category-trending-now-options-item">Фильтр
								1</label>
							<label for="catalog-category-trending-now-item2"><input type="checkbox"
									id="catalog-category-trending-now-item2" class="catalog-category-trending-now-options-item">Фильтр
								2</label>
							<label for="catalog-category-trending-now-item3"><input type="checkbox"
									id="catalog-category-trending-now-item3" class="catalog-category-trending-now-options-item">Фильтр
								3</label>
							<label for="catalog-category-trending-now-item4"><input type="checkbox"
									id="catalog-category-trending-now-item4" class="catalog-category-trending-now-options-item">Фильтр
								4</label>
						</div>
					</div>
					<div class="catalog-category-wrapper catalog-category-size">
						<input type="checkbox" id="catalog-category-size-btn" class="catalog-category-size-btn" v-model="size" @click="openCloseSize">
						<label for="catalog-category-size-btn" class="catalog-category-size-label">
							<span class="catalog-category-size-label-text">Size</span>
							<svg class="catalog-category-size-label-icon" width="11" height="6">
								<use xlink:href="#arrow-down-icon"></use>
							</svg>
						</label>
						<div class="catalog-category-size-options">
							<label for="catalog-category-size-item1"><input name="filterSize" value="S" type="checkbox" @change="$root.$refs.search.mainFilter()" id="catalog-category-size-item1"
									class="catalog-category-size-options-item">S</label>
							<label for="catalog-category-size-item2"><input name="filterSize" value="M" type="checkbox" @change="$root.$refs.search.mainFilter()" id="catalog-category-size-item2"
									class="catalog-category-size-options-item">M</label>
							<label for="catalog-category-size-item3"><input name="filterSize" value="L" type="checkbox" @change="$root.$refs.search.mainFilter()" id="catalog-category-size-item3"
									class="catalog-category-size-options-item">L</label>
							<label for="catalog-category-size-item4"><input name="filterSize" value="XL" type="checkbox" @change="$root.$refs.search.mainFilter()" id="catalog-category-size-item4"
									class="catalog-category-size-options-item">XL</label>
						</div>
					</div>
					<div class="catalog-category-wrapper catalog-category-price">
						<input type="checkbox" id="catalog-category-price-btn" class="catalog-category-price-btn" v-model="price" @click="openClosePrice">
						<label for="catalog-category-price-btn" class="catalog-category-price-label">
							<span class="catalog-category-price-label-text">Price</span>
							<svg class="catalog-category-price-label-icon" width="11" height="6">
								<use xlink:href="#arrow-down-icon"></use>
							</svg>
						</label>
						<div class="catalog-category-price-options">
							<label for="catalog-category-price-item1"><input name="filterPrice" value="range1" @change="$root.$refs.search.mainFilter()" type="checkbox" id="catalog-category-price-item1"
									class="catalog-category-price-options-item">от 0 до 20 $</label>
							<label for="catalog-category-price-item2"><input name="filterPrice" value="range2" @change="$root.$refs.search.mainFilter()" type="checkbox" id="catalog-category-price-item2"
									class="catalog-category-price-options-item">от 20 до 40 $</label>
							<label for="catalog-category-price-item3"><input name="filterPrice" value="range3" @change="$root.$refs.search.mainFilter()" type="checkbox" id="catalog-category-price-item3"
									class="catalog-category-price-options-item">от 40 до 60 $</label>
							<label for="catalog-category-price-item4"><input name="filterPrice" value="range4" @change="$root.$refs.search.mainFilter()" type="checkbox" id="catalog-category-price-item4"
									class="catalog-category-price-options-item">от 60 до 80 $</label>
							<label for="catalog-category-price-item5"><input name="filterPrice" value="range5" @change="$root.$refs.search.mainFilter()" type="checkbox" id="catalog-category-price-item5"
									class="catalog-category-price-options-item">от 80 до 100 $</label>
						</div>
					</div>
				</form>
				
			</div>`
};

export default catalogFilter;
