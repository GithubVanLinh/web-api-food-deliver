const {
  CategoryModel,
  DistrictModel,
  FoodModel,
  StreetModel,
  TypeModel,
  UserModel,
  AreaModel,
} = require("../../models");

const data = {
  categories: [],
  districts: [],
  streets: [],
  foods: [],
  types: [],
  users: [],
  areas: [],
};

async function addSampleArea() {
  data.areas.push(
    await AreaModel.create({
      name: "Lang Dai Hoc",
    })
  );
  data.areas.push(
    await AreaModel.create({
      name: "Cho Dem Nong Lam",
    })
  );
  data.areas.push(
    await AreaModel.create({
      name: "KTX Khu B",
    })
  );
  data.areas.push(
    await AreaModel.create({
      name: "Ho Thi Ky",
    })
  );
}

async function addSampleCategory() {
  const ga = await CategoryModel.create({
    name: "Ga",
  });
  data.categories.push(ga);
  const heo = await CategoryModel.create({
    name: "Heo",
  });
  data.categories.push(heo);
  data.categories.push(
    await CategoryModel.create({
      name: "Com",
    })
  );
  data.categories.push(
    await CategoryModel.create({
      name: "Bo",
    })
  );
}
async function addSampledistrict() {
  data.districts.push(
    await DistrictModel.create({
      name: "Quan 1",
    })
  );
  data.districts.push(
    await DistrictModel.create({
      name: "Quan 2",
    })
  );
  data.districts.push(
    await DistrictModel.create({
      name: "Quan 3",
    })
  );
  data.districts.push(
    await DistrictModel.create({
      name: "Quan 4",
    })
  );
}
async function addSampleFood() {
  data.foods.push(
    await FoodModel.create({
      name: "Com Uc Ga",
      types: [data.types[0]._id, data.types[2]._id],
      categories: [data.categories[0]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[0]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Com Tam",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Com Suon",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Bun bo",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Bun Thit Nuong",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Tra chanh",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Nuoc Mia",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Kem",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Ca vien chien",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Banh mi thit",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Banh mi cha ca",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "che",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "banh mi trung",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
  data.foods.push(
    await FoodModel.create({
      name: "Pho",
      types: [data.types[0]._id],
      categories: [data.categories[1]._id, data.categories[2]._id],
      price: 30000,
      street: data.streets[3]._id,
      district: data.districts[2]._id,
      address: "nga ba",
      area: data.areas[2]._id,
      rating: 4.4,
      open: "02:30",
      close: "23:00",
    })
  );
}
async function addSampleStreet() {
  data.streets.push(
    await StreetModel.create({
      name: "3/2",
    })
  );
  data.streets.push(
    await StreetModel.create({
      name: "CMT8",
    })
  );
  data.streets.push(
    await StreetModel.create({
      name: "Ly Thuong Kiet",
    })
  );
  data.streets.push(
    await StreetModel.create({
      name: "Nam Ky Khoi Nghia",
    })
  );
}
async function addSampleType() {
  data.types.push(
    await TypeModel.create({
      name: "Cay",
    })
  );
  data.types.push(
    await TypeModel.create({
      name: "An Vat",
    })
  );
  data.types.push(
    await TypeModel.create({
      name: "Kho",
    })
  );
  data.types.push(
    await TypeModel.create({
      name: "Nuoc",
    })
  );
}
async function addSampleUser() {}

function rsData() {
  data.areas = [];
  data.categories = [];
  data.streets = [];
  data.foods = [];
  data.types = [];
  data.users = [];
  data.areas = [];
}

async function createSampleData() {
  await addSampleArea();
  await addSampleCategory();
  await addSampledistrict();
  await addSampleStreet();
  await addSampleType();
  await addSampleFood();
  await addSampleUser();
  return data;
}

module.exports.createSampleData = createSampleData;
module.exports.deleteAllData = async () => {
  await UserModel.deleteMany();
  await FoodModel.deleteMany();
  await TypeModel.deleteMany();
  await StreetModel.deleteMany();
  await DistrictModel.deleteMany();
  await CategoryModel.deleteMany();
  await AreaModel.deleteMany();
  rsData();
};
