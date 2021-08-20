import catalog from './CatalogComp'
import catalogItem from './CatalogItemComp'

function productStyle() {
	let chooseColorCheckbox = document.querySelector('#choose-color-btn');
	let chooseSizeCheckbox = document.querySelector('#choose-size-btn');
	let chooseQuantityCheckbox = document.querySelector('#choose-quantity-btn');



	chooseColorCheckbox.onclick = function () {
		if (chooseColorCheckbox.checked) {
			chooseSizeCheckbox.checked = false;
			chooseQuantityCheckbox.checked = false;
		}
	}

	chooseSizeCheckbox.onclick = function () {
		if (chooseSizeCheckbox.checked) {
			chooseColorCheckbox.checked = false;
			chooseQuantityCheckbox.checked = false;
		}
	}

	chooseQuantityCheckbox.onclick = function () {
		if (chooseQuantityCheckbox.checked) {
			chooseColorCheckbox.checked = false;
			chooseSizeCheckbox.checked = false;
		}
	}
}

const pageProduct = {
	components: {
		catalog,
		catalogItem
	},
	data() {
		return {

		}
	},
	mounted() {
		productStyle();
	},
	template: `
	<main>
        <section class="container breadcrumps">
            <div class="container-mini breadcrumps-wrapper">
                <h2 class="breadcrumps-heading">New arrivals</h2>
                <nav class="breadcrumps-naviagation">
                    <a href="#" class="breadcrumps-item breadcrumps-first-level">Home</a><span> /</span>
                    <a href="#" class="breadcrumps-item breadcrumps-second-level">Men</a><span> /</span>
                    <a href="#" class="breadcrumps-item breadcrumps-third-level">New arrivals</a>
                </nav>
            </div>
        </section>
		<catalog-item ref="catalog-item" :productId="$route.params.id"></catalog-item>
        <section class="container mini-catalog">
            <div class="container-mini mini-catalog-wrapper">
                <catalog ref="catalog" :productsnumber="3"></catalog>
            </div>
        </section>
    </main>`
};

export default pageProduct;
