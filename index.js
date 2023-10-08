const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const helmet = require("helmet");
app.use(express.json());
let port = process.env.PORT ;

let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
// using cors
app.use(cors(corsOptions));

// using helmet
app.use(helmet());








app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
