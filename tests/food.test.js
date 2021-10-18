process.env.NODE_ENV = "TEST";

const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../index");
const { FoodModel } = require("../models");
const { createSampleData, deleteAllData } = require("./samples/data.sample");

var assert = chai.assert;
describe("Array", function () {
  let data;
  this.beforeEach(async () => {
    await deleteAllData();
    data = [];
    data = await createSampleData();
  });
  describe("#indexOf()", () => {
    it("return 10 food", async () => {
      const res = await chai.request(app).get("/foods");
      console.log(res.body.totalFoods);
      assert.equal(res.status, 200);
      assert.equal(res.body.totalFoods, data.foods.length);
      assert.equal(res.body.foods.length, 10);
      console.log("name", res.body.foods[0].types[0].name);
      assert.exists(res.body.foods[0].types[0].name);
    });
    it("return 4 food", async () => {
      const res = await chai.request(app).get("/foods").query({
        page: 2,
      });
      console.log(res.body.totalFoods);
      assert.equal(res.status, 200);
      assert.equal(res.body.totalFoods, data.foods.length);
      assert.equal(res.body.foods.length, 4);
      console.log("name", res.body.foods[0].types[0].name);
      assert.exists(res.body.foods[0].types[0].name);
    });
  });
});
