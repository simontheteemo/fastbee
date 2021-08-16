const express = require("express");
const router = express.Router();

const productController = require("../Controllers/product.controllers");

router.route("/:slug").get(productController.getProduct);

module.exports = router;
