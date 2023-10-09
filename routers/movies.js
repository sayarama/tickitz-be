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
router.put("/movies/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const columns = [
            "name",
            "release_date",
            "duration",
            "genres",
            "directed_by",
            "casts",
            "synopsis",
            "poster",
        ];

        const request = await moviesModel.editMovie(req.body, columns, id);

        res.status("200").json({
            status: true,
            message: "Update data success",
            data: request,
        });
    } catch (error) {
        console.log(error);
        res.status("502").json({
            status: false,
            message: "something wrong in our server",
            data: [],
        });
    }
});

// Delete
router.delete("/movies/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const request = await moviesModel.deleteMovie(id);
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

module.exports = router;
