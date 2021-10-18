const { FoodModel } = require("../models");

const PAGE_LIMIT = +process.env.PAGE_LIMIT || 10;

module.exports.getFoods = async (page, queries) => {
  const query = {};
  if (queries && queries.name) {
    query.name = queries.name;
  }
  const options = {
    page: page || 1,
    limit: PAGE_LIMIT,
    populate: ["street", "types", "categories", "district", "area"],
    customLabels: {
      docs: "foods",
      totalDocs: "totalFoods",
    },
  };
  return await FoodModel.paginate(query, options);
};
