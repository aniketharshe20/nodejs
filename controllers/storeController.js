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
	res.redirect('/');
}