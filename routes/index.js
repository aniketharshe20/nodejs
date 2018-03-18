const express = require('express');
const router = express.Router();

const { catchErrors } = require('../handlers/errorHandlers');
const storeController = require('../controllers/storeController');
// Do work here
router.get('/', storeController.homePage);
router.get('/store', catchErrors(storeController.getStores));
router.get('/store/add', storeController.addStore);
router.post('/store/add', catchErrors(storeController.createStore));
router.get('/store/:id/edit', catchErrors(storeController.editStore));
router.post('/store/update/:id', catchErrors(storeController.updateStore));

module.exports = router;