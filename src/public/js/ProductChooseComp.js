const productChoose = {
	data() {
		return {
			color: false,
			size: false,
			quantity: false,
		}
	},
	methods: {
		openCloseColor(){
			this.size = false;
			this.quantity = false;
		},
		openCloseSize(){
			this.color = false;
			this.quantity = false;
		},
		openCloseQuantity(){
			this.color = false;
			this.size = false;
		}
	},
	template: `
	<form action="product.html" class="product-item-choose">
		<div class="product-item-choose-wrapper">
			<input type="checkbox" id="choose-color-btn" class="product-item-choose-color-btn" v-model="color" @click="openCloseColor">
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
			<input type="checkbox" id="choose-size-btn" class="product-item-choose-size-btn" v-model="size" @click="openCloseSize">
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
			<input type="checkbox" id="choose-quantity-btn" class="product-item-choose-quantity-btn" v-model="quantity" @click="openCloseQuantity">
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
	</form>`
};

export default productChoose;
