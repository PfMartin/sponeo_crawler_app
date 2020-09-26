CREATE DATABASE sponeo;

/* Noch erledigen */
CREATE TABLE websites (
  id SERIAL PRIMARY KEY,
  institution VARCHAR(64),
  homepage VARCHAR(128),
  newspage VARCHAR(128),
  category VARCHAR(32),
  sports VARCHAR(32),
  geo VARCHAR(32),
  article_container VARCHAR(32),
  headline_element VARCHAR(32),
  href_element VARCHAR(32)
)

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  institution VARCHAR(64),
  homepage VARCHAR(128),
  url VARCHAR(128),
  headline VARCHAR(64)
)