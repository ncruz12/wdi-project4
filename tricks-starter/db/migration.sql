\c css_tricks_db

DROP TABLE IF EXISTS css_types;
DROP TABLE IF EXISTS tricks;

CREATE TABLE css_types (
  id SERIAL PRIMARY KEY,
  css_type VARCHAR(75)
);

CREATE TABLE tricks (
  id SERIAL PRIMARY KEY,
  description VARCHAR(150),
  css_type_id INTEGER REFERENCES css_types(id)
);
