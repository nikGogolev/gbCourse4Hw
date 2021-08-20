// import '@babel/polyfill'

import './css/styles.css'

import pageIndex from './js/PageIndexComp'
import pageCatalog from './js/PageCatalogComp'
import pageProduct from './js/PageProductComp'
import pageCart from './js/PageCartComp'
import pageRegistration from './js/PageRegistrationComp'

import cart from './js/CartComp'
import catalog from './js/CatalogComp'
import catalogItem from './js/CatalogItemComp'
import search from './js/SearchComp'
import error from './js/ErrorComp'

function main() {
    var navigationMenu = document.querySelector('.navmenu');
    var navigationMenuOpen = document.querySelector('.navmenu-open');
    var navigationMenuClose = document.querySelector('.navmenu-close');

    var menuListItemAccount = document.querySelector('.menu-list-item-account');
    var menuListItemCart = document.querySelector('.menu-list-item-cart');

    navigationMenuOpen.onclick = function () {
        if (navigationMenuOpen.checked) {
            navigationMenu.style.height = '764px';
            if (window.screen.width <= 375) {
                menuListItemAccount.style.visibility = 'visible';
                menuListItemCart.style.visibility = 'visible';
            }
        } else {
            navigationMenu.style.height = '0px';
            if (window.screen.width <= 375) {
                menuListItemAccount.style.visibility = 'hidden';
                menuListItemCart.style.visibility = 'hidden';
            }
        }

        navigationMenuClose.onclick = function () {
            navigationMenu.style.height = '0px';
            navigationMenuOpen.checked = false;
            navigationMenuOpen.onclick();
        }
    };

    window.onresize = function () {
        if (window.screen.width >= 375) {
            menuListItemAccount.style.visibility = 'visible';
            menuListItemCart.style.visibility = 'visible';
        }
    }


}

const routes = [
    { path: '/', component: pageIndex },
    { path: '/pageIndex', component: pageIndex },
    { path: '/pageCatalog', component: pageCatalog },
    { path: '/pageProduct/:id', component: pageProduct },
    { path: '/pageCart', component: pageCart },
    { path: '/pageRegistration', component: pageRegistration },
    

]

const router = new VueRouter({
    routes, // сокращённая запись для `routes: routes`

})


//const app = new Vue(appMain);
const app = new Vue({
    router,
    components: {
        pageIndex,
        pageCatalog,
        pageProduct,
        pageCart,
        pageRegistration,

        cart,
        catalog,
        catalogItem,
        search,
        error
    },
    watch: {
        $route(to, from) {
            document.documentElement.scrollIntoView(true);
            window.location.reload();
        }
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },
        deleteJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.error.setError(error);
                });
        },

    },

    beforeCreated() {
        
    },
    created() {
        
    },
    beforeMount() {

    },
    mounted() {
        main();
        
    },
    beforeUpdate() {

    },
    updated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },

}).$mount('#app')