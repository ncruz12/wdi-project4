const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {
  findAll() {
    return db.many(`
      SELECT tricks.id, category, description
      FROM tricks INNER JOIN codes
      ON tricks.codes_id = codes.id
    ORDER BY id
      `);
  },
  findById(id) {
    return db.one(`
      SELECT tricks.id, category, description, codes.html_code, codes.css_code
        FROM tricks INNER JOIN codes
        ON tricks.codes_id = codes.id
      WHERE tricks.id = $1;
    `, id);
  },
  save(trick) {
    console.log(trick)
    trick.codes_id = Number.parseInt(trick.codes_id, 10);
    return db.one(`
      INSERT INTO tricks
      (category, description, codes_id)

      VALUES
      ($/category/, $/description/, $/codes_id/)
      RETURNING *
    `, trick);
  },
  update(trick) {
    return db.one(`
      UPDATE tricks
      SET
      description = $/description/
      WHERE id = $/id/
      RETURNING *
    `, trick);
  },
  destroy(id) {
    return db.none(`
      DELETE
        FROM tricks
        WHERE id = $1
      `, id);
  },
};
