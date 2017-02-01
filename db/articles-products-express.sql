DROP DATABASE IF EXISTS articles_products;

DROP USER IF EXISTS jonathonlaylo;

CREATE USER jonathonlaylo;

CREATE DATABASE articles_products;

\c articles_products;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name varchar(90) NOT NULL,
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL
);

DROP TABLE IF EXISTS articles;
CREATE TABLE articles (
  id SERIAL NOT NULL PRIMARY KEY,
  title text,
  body text,
  author text,
  url_title text
);
