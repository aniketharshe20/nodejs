const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
	res.render('index', {name:'aniket', title:'nodejs'});
}

exports.addStore = (req, res) => {
	res.render('add-edit', {title: 'Add Store'});
}

exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	req.flash('success', `Store created ${store.name}`);
	res.redirect('/');
}

exports.getStores = async (req, res) => {
	const stores = await Store.find();
	res.render('stores', {title:'Stores', stores: stores});
}