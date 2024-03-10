const pgp = require("pg-promise")();

const database = pgp({
    user: "postgres",
    password: "123456",
    database: "metis",
    port: 5432,
    host: 'postgres'
})

module.exports = database;