const express = require("express");
const { createProduct ,totalPrice} = require("../controllers/productControllers");
const router=express.Router();

router.route("/create").post(createProduct);
router.route("/total-price").get(totalPrice);
module.exports =router;