Vue.component('server-error', {
    data(){
        return {
			showError: false,
        }
    },
    methods: {
		displayError(){
			this.showError = true;
		},
		hideError(){
			this.showError = true;
		}
    },
    template: `
        <div class="error" v-show="showError">
			<h2 class="error-text">Ошибка связи с сервером!</h2>
		</div>
    `
});

