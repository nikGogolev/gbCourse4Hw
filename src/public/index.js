// import '@babel/polyfill'

import './css/styles.less'

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
import navMenu from './js/NavMenuComp'
import svgLibrary from './js/SVGLibraryComp'

const routes = [
    { path: '/', component: pageIndex },
    { path: '/pageIndex', component: pageIndex },
    { path: '/pageCatalog', component: pageCatalog },
    { path: '/pageProduct/:id', component: pageProduct },
    { path: '/pageCart', component: pageCart },
    { path: '/pageRegistration', component: pageRegistration },
    

]

const router = new VueRouter({
    routes,

})

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
        error,
        navMenu,
        svgLibrary
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

}).$mount('#app')