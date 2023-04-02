const express = require('express');
const router = express.Router();
const {getFeaturedProductsDetailsController,getFeaturedProductsDetailsByIdController} = require('../constrollers/featuredproducts');

router.get('/', getFeaturedProductsDetailsController);
router.get("/:id",getFeaturedProductsDetailsByIdController)

module.exports = router;