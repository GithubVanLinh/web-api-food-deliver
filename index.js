require("dotenv").config();
require("./configs").connectDb();

const cors = require("cors");
const express = require("express");
const http = require("http");
const morgan = require("morgan");

const router = require("./routes");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

module.exports = app;
