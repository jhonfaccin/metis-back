const pgp = require("pg-promise")();

const database = pgp({
    user: "postgres",
    password: "123456",
    database: "metis",
    port: 5432,
    host: 'db'
})

// const database = pgp("postgres://postgres:123456@db:5432/metis");

module.exports = database;