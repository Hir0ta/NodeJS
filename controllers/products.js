const Product = require('../models/product');

/************** Add product get request *********************/

exports.getAddProduct = (req, res, next) =>
{
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};


/*************** Add product post  request *****************/

exports.postAddProduct = (req, res, next) =>
{
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};


/************ Get all products get request****************/

exports.getProducts = (req, res, next) =>
{
	Product.fetchAll(products =>
	{
		res.render('shop/product-list', {
			prods: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});
};