const express = require('express');
const router = express.Router();
const {getBestSellerDetailsController,getBestSellerDetailsByIdController} = require('../constrollers/bestseller');

router.get('/', getBestSellerDetailsController);
router.get("/:id",getBestSellerDetailsByIdController)

module.exports = router;