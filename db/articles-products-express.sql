DROP DATABASE IF EXISTS articlesProducts;

DROP USER IF EXISTS jonathonlaylo;

CREATE USER jonathonlaylo;

CREATE DATABASE articlesProducts;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL NOT NULL PRIMARY KEY,
  name varchar(90) NOT NULL,
  price INTEGER NOT NULL,
  inventory INTEGER NOT NULL
);
