const moviesModel = require("../models/movies") 

const moviesController = {
    _getAllMovies: async (req, res) => {
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
    }
}

module.export = moviesController;