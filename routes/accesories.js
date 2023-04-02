const express = require('express');
const router = express.Router();
const {getAccesoriesDetailsController,getAccesoriesDetailsByIdController} = require('../constrollers/accesories');

router.get('/', getAccesoriesDetailsController);
router.get("/:id",getAccesoriesDetailsByIdController)

module.exports = router;