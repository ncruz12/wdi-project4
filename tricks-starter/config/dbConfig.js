module.exports = process.env.DATABASE_URL || {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'css_tricks_db',
    port: process.env.DB_PORT || 5432,
  };
