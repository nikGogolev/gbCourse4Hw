const navMenu = {
	data() {
		return {
			checked: false,
			menuHeight: 0,
		}
	},
	methods: {
		openCloseMenu(){
			if (!this.checked) {
				this.menuHeight = 764;
				if (window.screen.width <= 375) {
					document.querySelector('.menu-list-item-account').style.visibility = 'visible';
					document.querySelector('.menu-list-item-cart').style.visibility = 'visible';
				}
			} else {
				this.menuHeight = 0;
				this.checked = false;
				if (window.screen.width <= 375) {
					document.querySelector('.menu-list-item-account').style.visibility = 'hidden';
					document.querySelector('.menu-list-item-cart').style.visibility = 'hidden';
					this.checked = false;
				}
			}
		}
	},
	template: `
	<li class="menu-list-item">
		<input class="menu-list-item-menu-btn navmenu-open" id="menu-list-menu-btn" type="checkbox" @click="openCloseMenu" v-model="checked">
		<label for="menu-list-menu-btn" class="menu-list-item-menu-label">
			<svg class="menu-list-item-menu-label-icon" width="32" height="28"
				xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28">
				<path class="menu-list-item-menu-label-icon-color" d="M0 0 L32 0 L32 4 L0 4 Z"></path>
				<path class="menu-list-item-menu-label-icon-color" d="M0 12 L32 12 L32 16 L0 16 Z">
				</path>
				<path class="menu-list-item-menu-label-icon-color" d="M0 24 L32 24 L32 28 L0 28 Z">
				</path>
			</svg>
		</label>
		<nav class="navmenu" :style="{height: menuHeight +'px'}">
			<h2 class="navmenu-heading">Menu</h2>
			<ul class="navmenu-list">
				<li class="navmenu-list-item">
					<a class="navmenu-list-item-link" href="#">Man</a>
					<ul class="navmenu-list-item-sublist">
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Accessories</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Bags</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Denim</a></li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">T-Shirts</a></li>
					</ul>
				</li>
				<li class="navmenu-list-item">
					<a class="navmenu-list-item-link" href="#">Woman</a>
					<ul class="navmenu-list-item-sublist">
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Accessories</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Jackets &
								Coats</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Polos</a></li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">T-Shirts</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Shirts</a>
						</li>
					</ul>
				</li>
				<li class="navmenu-list-item">
					<a class="navmenu-list-item-link" href="#">Kids</a>
					<ul class="navmenu-list-item-sublist">
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Accessories</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Jackets &
								Coats</a></li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Polos</a></li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">T-Shirts</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Shirts</a>
						</li>
						<li class="navmenu-list-item-sublist-item"><a class="navmenu-list-item-sublist-item-link"
								href="#">Bags</a></li>
					</ul>
				</li>
			</ul>
			<button class="navmenu-close" @click="openCloseMenu">
				<svg class="navmenu-close-icon" width="18" height="18">
					<use xlink:href="#close-icon"></use>
				</svg>
			</button>
		</nav>
	</li>`
};

export default navMenu;
