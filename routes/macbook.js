const express = require('express');
const router = express.Router();
const {getMacbookDetailsController,getMacbookDetailsByIdController} = require('../constrollers/macbook');

router.get('/', getMacbookDetailsController);
router.get("/:id",getMacbookDetailsByIdController)

module.exports = router;