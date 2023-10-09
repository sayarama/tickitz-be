const moviesModel = require("../models/movies");
const { Validator } = require("node-input-validator");

const moviesController = {
    _getAllMovie: async (req, res) => {
        try {
            const request = await moviesModel.getAllMovies();
    
            res.status("200").json({
                status: true,
                message: "Get data success",
                data: request,
            });
        } catch (error) {
            console.log(error)
            res.status("502").json({
                status: false,
                message: "something wrong in our server",
                data: [],
            });
        }
    },
    _getSelectedMovie: async (req, res) => {
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
    },
    _validationAddMovie: async (req, res, next) => {
        
    const schema = new Validator(req.body, {
        name: "required|minLength:1|maxLength:100",
        release_date: "required|date",
        duration: "required|maxLength:50",
        directed_by: "required|maxLength:60",
        genres: "required|array|arrayUnique",
        synopsis: "required|maxLength:900",
        poster: "required|url"
    })

    schema.check().then((matched) => {
        if (!matched) {
            res.status(422).send({
                status: false,
                message: schema.errors,
                data: null
            })
            return;
        } else {
            next();
        }
    })
    },
    _addMovie: async (req, res) => {
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
    },
    _validationUpdateMovie: (req, res, next) => {
        const schema = new Validator(req.body, {
            name: "required|minLength:1|maxLength:100",
            release_date: "required|date",
            duration: "required|maxLength:50",
            directed_by: "required|maxLength:60",
            genres: "required|array|arrayUnique",
            synopsis: "required|maxLength:900",
            poster: "required|url"
        })
    
        schema.check().then((matched) => {
            if (!matched) {
                res.status(422).send({
                    status: false,
                    message: schema.errors,
                    data: null
                })
                return;
            } else {
                next();
            }
        });
    },
    _UpdateMovie: async (req, res) => {
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
    }
};

module.exports = moviesController;
