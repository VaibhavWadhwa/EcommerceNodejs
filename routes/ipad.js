const express = require('express');
const router = express.Router();
const {getIpadDetailsController,getIpadDetailsByIdController} = require('../constrollers/ipad');

router.get('/', getIpadDetailsController);
router.get("/:id",getIpadDetailsByIdController)

module.exports = router;