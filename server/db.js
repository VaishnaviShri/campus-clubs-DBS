const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password : "yolo1234",
    host: "localhost",
    port: 5432,
    database: "campusclubs"
});

module.exports = pool;