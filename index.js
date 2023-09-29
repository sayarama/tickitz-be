const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

app.get("/movies", async (req, res) => {
  try {
    const request = await database`SELECT id, name, genres, poster, duration FROM movies`;

    res.json({
      status: true,
      message: "Get Data Success",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      message: "Something weong in our server",
      data: [],
    })
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params
    const request = await database`SELECT * FROM movies WHERE id = ${id}`;

    res.json({
      status: true,
      message: "Get Data Success",
      data: request,
    });
  } catch (error) {
    res.status(502).json({
      status: false,
      message: "Something weong in our server",
      data: [],
    })
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
