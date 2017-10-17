const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {
  findAll() {
    return db.many(`
      SELECT tricks.id, description, css_type_id
      FROM tricks INNER JOIN css_types
      ON tricks.css_type_id = css_types.id
    ORDER BY id
      `);
  },
  findById(id) {
    return db.one(`
      SELECT tricks.id, description, css_types.css_type
        FROM tricks INNER JOIN css_types
        ON tricks.css_type_id = css_types.id
      WHERE tricks.id = $1;
    `, id);
  },
  save(trick) {
    console.log(trick)
    trick.css_type_id = Number.parseInt(trick.css_type_id, 10);
    return db.one(`
      INSERT INTO tricks
      (description, css_type_id)
      VALUES
      ($/description/, $/css_type_id/)
      RETURNING *
    `, trick);
  },
  // update(trick, id) {
  //   console.log('===>',trick);
  //   console.log(id)
  //   return db.one(`
  //     UPDATE tricks
  //     SET
  //     description = $1
  //     WHERE id = $2
  //   `, [trick.description, id]);
  // },
  destroy(id) {
    return db.none(`
      DELETE
        FROM tricks
        WHERE id = $1
      `, id)
  },
};
