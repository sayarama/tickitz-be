const moviesController = require("../controllers/movies");
const router = require("express").Router();
const moviesModel = require("../models/movies");

// Get
router.get("/movies", moviesController._getAllMovie);

// Get selected id
router.get("/movies/:id", moviesController._getSelectedMovie);

// Post
router.post(
    "/movies",
    moviesController._validationAddMovie,
    moviesController._addMovie
);

// Update
router.put(
    "/movies/:id",
    moviesController._validationUpdateMovie,
    moviesController._updateMovie
);

// Delete
router.delete("/movies/:id", );

module.exports = router;
