const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

// Gran access expres json from outside
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

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
      message: "Something wrong in our server",
      data: [],
    });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
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
    });
  }
});

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

    const request = await database`INSERT INTO movies
    (name, release_date, duration, genres, directed_by, casts, synopsis, poster)
  values
    (${name}, ${release_date}, ${duration}, ${genres}, ${directed_by}, ${casts}, ${synopsis}, ${poster}) RETURNING id`;

  if (request.length > 0) {
    res.json({
      status: true,
      message: "Insert Data Success",
    });
  } else {
    res.status(400).json({
      status: false,
      message: "Bad Input, please make sure your input is complete"
    });
  }

    
  } catch (error) {
    res.status(502).json({
      status: false,
      message: "Something wrong in our server",
      data: [],
    });
  }
});

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`);
});
