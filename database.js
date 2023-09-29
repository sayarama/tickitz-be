const postgres = require("postgres")

const sql = postgres({
    host: "localhost",
    user: "postgres",
    pass: "null",
    database: "tickitz",
    port: 5432,
});

module.exports = sql;