

-- DROP TABLE IF EXISTS css_types;
-- DROP TABLE IF EXISTS tricks;

-- CREATE TABLE css_types (
--   id SERIAL PRIMARY KEY,
--   css_type VARCHAR(75)
-- );

-- CREATE TABLE tricks (
--   id SERIAL PRIMARY KEY,
--   description VARCHAR(150),
--   css_type_id INTEGER REFERENCES css_types(id)
-- );

DROP TABLE IF EXISTS tricks;
DROP TABLE IF EXISTS codes;


CREATE TABLE codes (
  id SERIAL PRIMARY KEY,
  html_code TEXT,
  css_code TEXT
);

CREATE TABLE tricks (
  id SERIAL PRIMARY KEY,
  category VARCHAR(75),
  description VARCHAR(250),
  codes_id INTEGER REFERENCES codes(id)
);
