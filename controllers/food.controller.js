const { FoodService } = require("../services");

module.exports.getListFood = async (req, res, next) => {
  const { page, ...rest } = req.query;
  try {
    const foods = await FoodService.getFoods(page, rest);
    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error when get list food",
    });
  }
};

module.exports.getFoodsByPriceAndArea = async function (req, res, next) {};
