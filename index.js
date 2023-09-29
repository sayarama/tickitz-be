const express = require("express");
const app = express();
const port = 3000;
const database = require("./database");

app.get("/movies", async (req, res) => {
  try {
    const request = await database`SELECT * FROM movies`;

    res.json(request);
  } catch (error) {}
});

app.get("/movies/:id", async (req, res) => {
  
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
