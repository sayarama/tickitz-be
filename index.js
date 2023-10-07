const express = require("express");
require("dotenv").config();
const app = express();
const database = require("./database");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
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
      message: "Post data success",
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
      message: "Update data success",
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
  try {
    const id = Number(req.params.id);
    const request = await database`DELETE FROM movies WHERE id=${id}`;
    res.status("200").json({
      status: true,
      message: "Data Deleted",
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

// Endpoint Cinemas
// Get
app.get("/cinemas", async (req, res) => {
  try {
    const request = await database`SELECT * FROM cinemas`;
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
app.get("/cinemas/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const request = await database`SELECT * FROM cinemas WHERE id=${id}`;
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
app.post("/cinemas", async (req, res) => {
  try {
    const { movie_id, name, city, adress, show_times, price, logo } = req.body;
    const request =
      await database`INSERT INTO cinemas(movie_id, name, city, adress, show_times, price, logo) VALUES(${movie_id},${name},${city},${adress},${show_times},${price},${logo})`;
    res.status("200").json({
      status: true,
      message: "Post data success",
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
app.put("/cinemas/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { movie_id, name, city, adress, show_times, price, logo } = req.body;
    const request =
      await database`UPDATE cinemas SET movie_id=${movie_id}, name=${name}, city=${city}, adress=${adress}, show_times=${show_times}, price=${price}, logo=${logo} WHERE id=${id}`;
    res.status("200").json({
      status: true,
      message: "Update data success",
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
  try {
    const id = Number(req.params.id);
    const request = await database`DELETE FROM movies WHERE id=${id}`;
    res.status("200").json({
      status: true,
      message: "Data Deleted",
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

// Get users

app.get("/users", async (req, res) => {
  try {
    const request =
      await database`SELECT first_name, last_name, phone_number, photo_profile FROM users`;
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

// User register
app.post("/users/register", async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      email,
      password,
      photo_profile,
    } = req.body;

    const isInputValid =
      first_name &&
      last_name &&
      phone_number &&
      email &&
      password &&
      photo_profile;

    if (!isInputValid) {
      res.status(400).json({
        status: false,
        message: "Bad input, please make sure your input is completed",
      });
    }

    const request =
      await database`INSERT INTO users(first_name, last_name, phone_number, email, password, photo_profile) VALUES(${first_name},${last_name},${phone_number},${email},${password},${photo_profile}) RETURNING id`;
    if (request.length > 0) {
      res.json({
        status: true,
        message: "Insert data success",
      });
    }
  } catch (error) {
    res.status("502").json({
      status: false,
      message: "something wrong in our server",
      data: [],
    });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
