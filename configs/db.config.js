const mongoose = require("mongoose");

module.exports = () => {
  console.log("NODE_ENV", process.env.NODE_ENV);
  const DB_CONNECTSTRING =
    process.env.NODE_ENV === "TEST"
      ? process.env.DB_TEST_CONNECTSTRING
      : process.env.DB_CONNECTSTRING;
  mongoose
    .connect(DB_CONNECTSTRING)
    .catch((err) => console.log(err.massage))
    .then(() => console.log("connected to db"));
};
