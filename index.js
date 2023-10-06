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

// // Grant access expres json from outside
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());

// // ENDPOINT MOVIES

// app.get("/movies", async (req, res) => {
//   try {
//     const request =
//       await database`SELECT id, name, genres, poster, duration FROM movies`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.get("/movies/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const request = await database`SELECT * FROM movies WHERE id = ${id}`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something weong in our server",
//       data: [],
//     });
//   }
// });

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

    const isInputValid =
      name &&
      release_date &&
      duration &&
      directed_by &&
      casts &&
      synopsis &&
      poster;

      // check if input is valid

    if (!isInputValid) {
      res.status(400).json({
        status: false,
        message: "Bad Input, please make sure your input is complete",
      });
    }

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
        message: "Bad Input, please make sure your input is complete",
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

// // ENDPOINT CINEMAS

// app.get("/cinemas", async (req, res) => {
//   try {
//     const request =
//       await database`SELECT id, movie_id, name, city, price, logo FROM cinemas`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.get("/cinemas/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const request = await database`SELECT * FROM cinemas WHERE id = ${id}`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.post("/cinemas", async (req, res) => {
//   try {
//     const {
//       movie_id,
//       name,
//       city,
//       adress,
//       show_times,
//       price,
//       logo,
//     } = req.body;

//     const isInputValid =
//       movie_id &&
//       name &&
//       city &&
//       adress &&
//       show_times &&
//       price &&
//       logo;

//       // check if input is valid

//     if (!isInputValid) {
//       res.status(400).json({
//         status: false,
//         message: "Bad Input, please make sure your input is complete",
//       });
//     }

//     const request = await database`INSERT INTO cinemas
//     (movie_id, name, city, adress, show_times, price, logo)
//   values
//     (${movie_id}, ${name}, ${city}, ${adress}, ${show_times}, ${price}, ${logo}) RETURNING id`;

//     if (request.length > 0) {
//       res.json({
//         status: true,
//         message: "Insert Data Success",
//       });
//     } else {
//       res.status(400).json({
//         status: false,
//         message: "Bad Input, please make sure your input is complete",
//       });
//     }
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// // ENDPOINT USER

// app.get("/users", async (req, res) => {
//   try {
//     const request =
//       await database`SELECT id, first_name, last_name, phone_number, email, photo_profile FROM users`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.get("/users/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const request = await database`SELECT * FROM users WHERE id = ${id}`;

//     res.json({
//       status: true,
//       message: "Get Data Success",
//       data: request,
//     });
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.post("/users", async (req, res) => {
//   try {
//     const {
//       first_name,
//       last_name,
//       phone_number,
//       email,
//       password,
//       photo_profile,
//     } = req.body;

//     const isInputValid =
//       first_name &&
//       last_name &&
//       phone_number &&
//       email &&
//       password &&
//       photo_profile

//       // check if input is valid

//     if (!isInputValid) {
//       res.status(400).json({
//         status: false,
//         message: "Bad Input, please make sure your input is complete",
//       });
//     }

//     const request = await database`INSERT INTO users
//     (first_name, last_name, phone_number, email, password, photo_profile)
//   values
//     (${first_name}, ${last_name}, ${phone_number}, ${email}, ${password}, ${photo_profile}) RETURNING id`;

//     if (request.length > 0) {
//       res.json({
//         status: true,
//         message: "Insert Data Success",
//       });
//     } else {
//       res.status(400).json({
//         status: false,
//         message: "Bad Input, please make sure your input is complete",
//       });
//     }
//   } catch (error) {
//     res.status(502).json({
//       status: false,
//       message: "Something wrong in our server",
//       data: [],
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
