const express = require("express");
require("dotenv").config();
const app = express();
const database = require("./database");
const cors = require("cors");
const helmet = require("helmet");
app.use(express.json());
let port = process.env.PORT;

let corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.use(helmet());

// Get
app.get("/movies", async (req, res) => {
  try {
    const request = await database`SELECT * FROM movies`;
    res.status("200").json({
      status: true,
      message: "Get data success",
      data: request,
    });
  } catch (error) {
    res.status("502").json({
      status: false,
      message: "something wrong in our server",
      data: [],
    });
  }
});

// Get selected id
app.get("/movies/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const request = await database`SELECT * FROM movies WHERE id=${id}`;
    res.status("200").json({
      status: true,
      message: "Get data success",
      data: request,
    });
  } catch (error) {
    res.status("502").json({
      status: false,
      message: "something wrong in our server",
      data: [],
    });
  }
});

// Post
app.post("/movies", async (req, res) => {
  try {
    const {
      name,
      release_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      poster,
    } = req.body;
    const request =
      await database`INSERT INTO movies(name, release_date, duration, genres, directed_by, casts, synopsis, poster) VALUES(${name},${release_date},${duration},${genres},${directed_by},${casts},${synopsis},${poster})`;
    res.status("200").json({
      status: true,
      message: "Get data success",
      data: request,
    });
  } catch (error) {
    res.status("502").json({
      status: false,
      message: "something wrong in our server",
      data: [],
    });
  }
});

// Update
app.put("/movies/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {
      name,
      release_date,
      duration,
      genres,
      directed_by,
      casts,
      synopsis,
      poster,
    } = req.body;
    const request =
      await database`UPDATE movies SET name=${name}, release_date=${release_date}, duration=${duration}, genres=${genres}, directed_by=${directed_by}, casts=${casts}, synopsis=${synopsis}, poster=${poster} WHERE id=${id}`;
    res.status("200").json({
      status: true,
      message: "Get data success",
      data: request,
    });
  } catch (error) {
    res.status("502").json({
      status: false,
      message: "something wrong in our server",
      data: [],
    });
  }
});

// Delete
app.delete("/movies/:id", async (req, res) => {
  const id = Number(req.params.id);
  const request = await database`DELETE FROM movies WHERE id=${id}`;
  res.send("data deleted");
});

// Endpoint Users

// Get users

app.get("/users", async (req, res) => {});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
