const database = require("../database");

const modelMovies = {
    getAllMovies: async () => {
        const request = await database`SELECT * FROM movies`;

        return request;
    }
};

module.exports = modelMovies