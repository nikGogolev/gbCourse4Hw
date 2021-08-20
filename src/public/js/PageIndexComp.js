import catalog from './CatalogComp'

const pageindex = {
	components: { catalog },
	data() {
		return {
			catalog,
		}
	},
	template: `
			<main ref="indexPage">
			<section class="container promo">
					<div class="promo-wrapper">
						<video class="promo-video"
							width="1600"
							height="900"
							autoplay
							loop
							muted
							src="img/promo-video.mp4">
						</video>
					</div>
					<div class="promo-text">
						<h1 class="promo-text-heading"><span class="promo-text-heading-big">THE BRAND</span><br><span
							class="promo-text-heading-small">OF LUXERIOUS </span><span class="promo-text-heading-red">FASHION</span></h1>
					</div>
				</section>
				<section class="container categories">
					<div class="container-mini categories-wrapper">
						<div class="categories-people">
							<div class="categories-people-item">
								<img src="img/for-women.png" alt="for women image" class="categories-people-item-img">
								<div class="categories-people-item-cover">
									<p class="categories-people-item-cover-text">30% off</p>
									<h3 class="categories-people-item-cover-heading">For women</h3>
								</div>
							</div>
							<div class="categories-people-item">
								<img src="img/for-men.png" alt="for men image" class="categories-people-item-img">
								<div class="categories-people-item-cover">
									<p class="categories-people-item-cover-text">Hot deal</p>
								<h3 class="categories-people-item-cover-heading">For men</h3>
								</div>
							</div>
							<div class="categories-people-item">
								<img src="img/for-kids.png" alt="for kids image" class="categories-people-item-img">
								<div class="categories-people-item-cover">
									<p class="categories-people-item-cover-text">New arrivals</p>
									<h3 class="categories-people-item-cover-heading">For kids</h3>
								</div>
							</div>
						</div>
						<div class="categories-accesories">
							<img src="img/accesories.png" alt="accessories image" class="categories-accesories-img">
							<div class="categories-accesories-cover">
								<p class="categories-accesories-cover-text">Luxirous & trendy</p>
								<h3 class="categories-accesories-cover-heading">Accesories</h3>
							</div>
						</div>
					</div>
				</section>
				<section class="container featured-items">
					<div class="container-mini featured-items-wrapper">
						<div class="featured-items-header">
							<h2 class="featured-items-header-heading">Featured Items</h2>
							<p class="featured-items-header-text">Shop for items based on what we featured in this week</p>
						</div>
						<catalog ref="catalog" :productsnumber="6"></catalog>
						<router-link to="/pageCatalog" class="featured-items-more-button">Browse All Product</router-link>
					</div>
				</section>
				<section class="container ourfeatures">
					<div class="container-mini ourfeatures-wrapper">
						<div class="ourfeatures-card">
							<div class="ourfeatures-card-img ourfeatures-card-img-1">
								<svg class="ourfeatures-card-img-icon" width="48" height="40">
									<use xlink:href="#delivery-icon"></use>
								</svg>
							</div>
							<h3 class="ourfeatures-card-heading">Free Delivery</h3>
							<p class="ourfeatures-card-text">Worldwide delivery on all. Authorit tively morph next-generation
								innov tion with extensive models.</p>
						</div>
						<div class="ourfeatures-card">
							<div class="ourfeatures-card-img ourfeatures-card-img-2">
								<svg class="ourfeatures-card-img-icon" width="48" height="40">
									<use xlink:href="#sale-icon"></use>
								</svg>
							</div>
							<h3 class="ourfeatures-card-heading">Sales & discounts</h3>
							<p class="ourfeatures-card-text">Worldwide delivery on all. Authorit tively morph next-generation
								innov tion with extensive models.</p>
						</div>
						<div class="ourfeatures-card">
							<div class="ourfeatures-card-img ourfeatures-card-img-3">
								<svg class="ourfeatures-card-img-icon" width="48" height="40">
									<use xlink:href="#quality-icon"></use>
								</svg>
							</div>
							<h3 class="ourfeatures-card-heading">Quality assurance</h3>
							<p class="ourfeatures-card-text">Worldwide delivery on all. Authorit tively morph next-generation
								innov tion with extensive models.</p>
						</div>
					</div>
				</section>
			</main>`
};

export default pageindex;
