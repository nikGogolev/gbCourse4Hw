import catalog from './CatalogComp'
import catalogFilter from './CatalogFilterComp'

const pageCatalog = {
	components: {
		catalog,
		catalogFilter
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
	<section class="container catalog">
	
		<div class="container-mini catalog-wrapper">
		
			<catalog-filter ref="catalog-filter"></catalog-filter>
			<catalog ref="catalog" :productsnumber="9"></catalog>
			<div class="catalog-pagination">
				<ul class="catalog-pagination-list">
					<li class="catalog-pagination-list-item">
						<a class="catalog-pagination-list-item-link" href="#">
							<svg class="catalog-pagination-list-item-link-icon prev" width="9" height="14">
								<use xlink:href="#arrow-left-icon"></use>
							</svg>
						</a>
					</li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">1</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">2</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">3</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">4</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">5</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">6</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">.....</a></li>
					<li class="catalog-pagination-list-item"><a class="catalog-pagination-list-item-link" href="#">20</a></li>
					<li class="catalog-pagination-list-item">
						<a class="catalog-pagination-list-item-link" href="#">
							<svg class="catalog-pagination-list-item-link-icon next" width="9" height="14">
								<use xlink:href="#arrow-right-icon"></use>
							</svg>
						</a>
					</li>
				</ul>
			</div>
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

export default pageCatalog;
