const database = require("../infra/database");

exports.getExemplo = () => {
    return database.query("select * from metis.exemplo");
}