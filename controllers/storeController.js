const mongoose = require('mongoose');
const Store = mongoose.model('Store');
/**
 * Home page
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.homePage = (req, res) => {
	res.render('index', {name:'world', title:'nodejs'});
}

/**
 * Shows add store form
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.addStore = (req, res) => {
	res.render('add-edit', {title: 'Add Store'});
}

/**
 * Creates the store
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	req.flash('success', `Store created ${store.name}`);
	res.redirect('/store');
}

/**
 * Stores list
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.getStores = async (req, res) => {
	const stores = await Store.find();
	res.render('stores', {title:'Stores', stores: stores});
}

/**
 * Edit store
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.editStore = async (req, res) => {
	const store = await Store.findById(req.params.id);
	res.render('add-edit', { title: `Edit ${store.name}`, store });
}

/**
 * Updates the store
 *
 * @param  HTTP Request req
 * @param  HTTP Response res
 * @return void
 */
exports.updateStore = async (req, res) => {
	const store = await Store.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
			runValidators: true
		}
	);
	req.flash('success', `Store updated ${store.name}`);
	res.redirect(`/store/${store._id}/edit`);
}