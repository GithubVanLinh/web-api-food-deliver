const express = require("express");
const { FoodController } = require("../controllers");

const router = express.Router();

router.get("/", FoodController.getListFood);

module.exports = router;
