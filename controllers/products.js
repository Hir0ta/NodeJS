
/************** Add product get request *********************/

exports.getAddProduct = (req, res, next) =>
{
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};


/*************** Add product post  request *****************/

const products = [];

exports.postAddProduct = (req, res, next) =>
{
	products.push({ title: req.body.title });
	res.redirect('/');
};


/************ Get all products get request****************/

exports.getProducts = (req, res, next) =>
{
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	});
};