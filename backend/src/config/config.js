require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "mssql",

    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
        requestTimeout: 900000,
        validateBulkLoadParameters: true,
        port: Number(process.env.DB_PORT)
      },
    },

    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    timezone: "-03:00",
  },
};