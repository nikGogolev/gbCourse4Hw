const search = {
    data() {
        return {
            filtered: [],
            userSearch: '',
        }
    },
    methods: {
        filterName(array) {
            let regexp = new RegExp(this.userSearch, 'i');
            return array.filter(el => regexp.test(el.product_name));
        },
		
		filterSize(array) {
            let isFilter = false;
            let filterSize = document.querySelectorAll('input[name=filterSize]');
            let sizeFiltered = [];
            filterSize.forEach(filter => {
                if(filter.checked){
                    //let tempFiltered = array.filter(el => (el.product_size === filter.value));
                    sizeFiltered = [...sizeFiltered, ...array.filter(el => (el.product_size === filter.value))];
                    isFilter = true;
                }
            })

            if(!isFilter){
                return array;
            }

            return sizeFiltered;
        },

        filterPrice(array) {
            let isFilter = false;
            let filterPrice = document.querySelectorAll('input[name=filterPrice]');
            let priceFiltered = [];
            let range = [
                [0,20],
                [20,40],
                [40,60],
                [60,80],
                [80,100]
            ]
            filterPrice.forEach((filter, i) => {
                if(filter.checked){
                    //let tempFiltered = array.filter(el => (el.product_price >= range[i][0] && el.product_price <= range[i][1]));
                    priceFiltered = [...priceFiltered, ...array.filter(el => (el.product_price >= range[i][0] && el.product_price <= range[i][1]))];
                    isFilter = true;
                }
            })

            if(!isFilter){
                return array;
            }

            return priceFiltered;

        },

        mainFilter(){
            this.filtered = this.filterPrice(this.filterSize(this.filterName(this.$root.$refs.router.$refs.catalog.products)));
        }

    },
    template: `
        <form class="logo-list-item-search" @submit.prevent="mainFilter">
            <label for="logo-search" class="logo-list-item-search-label">
                <svg class="logo-list-item-search-label-icon" width="27" height="28">
                    <use xlink:href="#search-icon"></use>
                </svg>
            </label>
            <input type="search" id="logo-search" class="logo-list-item-search-input" v-model="userSearch">
        </form>
    `
};

export default search;