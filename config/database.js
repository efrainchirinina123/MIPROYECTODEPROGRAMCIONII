require("dotenv").config();
module.exports = {
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || null,
  database: process.env.MYSQL_DB_NAME || "lab",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  dialect: process.env.DIALECT || "mysql",
  port: process.env.MYSQL_PORT || 3306,
};
