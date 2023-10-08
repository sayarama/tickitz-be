const database = require("../database");
const router = require("express").Router();
const moviesModel = require("../models/movies")

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
router.post("/movies", async (req, res) => {
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
router.put("/movies/:id", async (req, res) => {
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
router.delete("/movies/:id", async (req, res) => {
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

module.exports = router;