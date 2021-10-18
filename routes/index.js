const express = require("express");

const foodRoute = require("./food.route");
const userRoute = require("./users.route");

const router = express.Router();

router.use("/users", userRoute);
router.use("/foods", foodRoute);

router.use((req, res, next) => {
  res.status(404).json({
    message: "NOT FOUND",
  });
});

router.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "server error",
  });
});
module.exports = router;
