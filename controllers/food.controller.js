const { FoodService } = require("../services");

module.exports.getListFood = async (req, res, next) => {
  const { page, categories } = req.query;
  try {
    console.log("categories", categories);
    const foods = await FoodService.getFoods(page);
    res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error when get list food",
    });
  }
};
