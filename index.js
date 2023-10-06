const express = require("express");
require("dotenv").config();
const app = express();
const database = require("./database");
app.use(express.json());
let port = process.env.PORT;

// Get
app.get("/movies", async (req, res) => {
  const request = await database`SELECT * FROM movies`;
  res.send(request);
});

// Get selected id
app.get("/movies/:id", async (req, res) => {
  const id = Number(req.params.id)
  const request = await database`SELECT * FROM movies WHERE id=${id}`;
  res.send(request);
});

// Post
app.post("/movies", async (req, res) => {
  const {name, release_date, duration, genres, directed_by, casts, synopsis, poster} = req.body
  const request = await database`INSERT INTO movies(name, release_date, duration, genres, directed_by, casts, synopsis, poster) VALUES(${name},${release_date},${duration},${genres},${directed_by},${casts},${synopsis},${poster})`;
  res.send("data created");
});

// Update
app.put('/movies/:id', async (req, res) => {
  const id = Number(req.params.id)
  const {name, release_date, duration, genres, directed_by, casts, synopsis, poster} = req.body
  const request = await database `UPDATE movies SET name=${name}, release_date=${release_date}, duration=${duration}, genres=${genres}, directed_by=${directed_by}, casts=${casts}, synopsis=${synopsis}, poster=${poster} WHERE id=${id}`
  res.send("data updated")
})

// Delete
app.delete('/movies/:id', async(req, res) => {
  const id = Number(req.params.id)
  const request = await database`DELETE FROM movies WHERE id=${id}`;
  res.send("data deleted")
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
