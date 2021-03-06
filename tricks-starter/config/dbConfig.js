// module.exports = process.env.DATABASE_URL || {
//     host: process.env.DB_HOST || 'localhost',
//     database: process.env.DB_NAME || 'css_tricks_db',
//     port: process.env.DB_PORT || 5432,
//   };


const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'css_tricks_db',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;

