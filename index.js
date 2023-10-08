const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const helmet = require("helmet");
app.use(express.json());
let port = process.env.PORT ;


// import router
const usersRouter = require("./routers/users")
const movieRouter = require("./routers/movies")
const cinemaRouter = require("./routers/cinemas")

let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
// using cors
app.use(cors(corsOptions));

// using helmet
app.use(helmet());

app.use(movieRouter);
app.use(cinemaRouter);
app.use(usersRouter);











app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
