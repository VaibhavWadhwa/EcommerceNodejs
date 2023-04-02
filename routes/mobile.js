const express = require('express');
const router = express.Router();
const {getMobileDetailsController,getMobileDetailsByIdController} = require('../constrollers/mobile');

router.get('/', getMobileDetailsController);
router.get("/:id",getMobileDetailsByIdController)

module.exports = router;