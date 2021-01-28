CREATE DATABASE sponeo;

/* Table for website information*/
CREATE TABLE websites (
  id SERIAL PRIMARY KEY,
  institution VARCHAR(64),
  homepage VARCHAR(128),
  newspage VARCHAR(128),
  category VARCHAR(32),
  sports VARCHAR(32),
  geo VARCHAR(32),
  article_container VARCHAR(128),
  headline_element VARCHAR(128),
  href_element VARCHAR(128)
);

/* Initial Value*/
/* done */
INSERT INTO websites
  (institution, homepage, newspage, category, sports, geo, article_container, headline_element, href_element)
VALUES
  ('FC Bayern Muenchen', 'https://fcbayern.com/de', 'https://fcbayern.com/de/news', 'Club', 'Soccer', 'national', 'a.text-teaser.news-overview-teaser.type-grid', 'div.header5', 'href');


/*Table for all articles*/
CREATE TABLE articles (
  t_stamp TIMESTAMP,
  institution VARCHAR(64),
  headline VARCHAR(128),
  href VARCHAR(256)
);
