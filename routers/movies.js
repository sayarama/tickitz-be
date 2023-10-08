const database = require("../database");
const router = require("express").Router();
const moviesModel = require("../models/movies");
const { Validator } = require("node-input-validator");

// Get
router.get("/movies", async (req, res) => {
    try {
        const request = await moviesModel.getAllMovies();
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
router.get("/movies/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const request = await moviesModel.getSelectedMovie(id);

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
router.post("/movies", async (req, res) => {
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
        genres &&
        casts &&
        synopsis &&
        poster;

    // check if input is valid
    if (!isInputValid) {
        res.status(400).json({
            status: false,
            message: "Bad input, please mae sure your input is completed",
        });

        return;
    }

    const request = await moviesModel.addMovie({
        name,
        release_date,
        duration,
        directed_by,
        genres,
        casts,
        synopsis,
        poster,
    });
    try {
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
