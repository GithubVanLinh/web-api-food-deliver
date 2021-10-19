const { FoodModel } = require("../models");
const { removeVietnameseTones } = require("../utils");

const PAGE_LIMIT = +process.env.PAGE_LIMIT || 10;

module.exports.getFoods = async (page, queries) => {
  const query = {};
  if (queries) {
    const { name, categories, area, type } = queries;
    if (name) {
      const lowCaseName = removeVietnameseTones(name).trim().toLowerCase();
      const keys = lowCaseName.split(" ");
      const listReg = [];
      for (const key of keys) {
        listReg.push(
          new RegExp("[0-9a-z\\s]*" + key.trim() + "[0-9a-z\\s]*", "i")
        );
      }

      query["$and"] = [];

      for (const key of keys) {
        query["$and"].push({
          searchName: {
            $regex: new RegExp(
              "[0-9a-z\\s]*" + key.trim() + "[0-9a-z\\s]*",
              "i"
            ),
          },
        });
      }

      // const lowCaseName = name.trim().toLowerCase();
      // const keys = lowCaseName.split(" ");
      // const listReg = [];
      // for (const key of keys) {
      //   listReg.push(
      //     new RegExp("[0-9a-z\\s]*" + key.trim() + "[0-9a-z\\s]*", "i")
      //   );
      // }
      // query.searchName = { $in: listReg };
    }
    if (type) {
      query.type = type;
    }
    if (categories && categories.length > 0) {
      const cates = Array.isArray(categories) ? categories : [categories];
      query.categories = { $all: cates };
    }
    if (area) {
      query.area = area;
    }
  }
  console.log("services/food.service.js", "query", query);

  const options = {
    page: page || 1,
    limit: PAGE_LIMIT,
    populate: ["street", "types", "categories", "district", "area"],
    customLabels: {
      docs: "foods",
      totalDocs: "totalFoods",
    },
  };
  const resl = await FoodModel.paginate(query, options);
  return resl;
};
