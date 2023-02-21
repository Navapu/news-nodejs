DROP DATABASE IF EXISTS news_portal;
CREATE DATABASE news_portal;
USE news_portal;

CREATE TABLE news (
    id_news INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(100),
    news TEXT,
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO news(title,news) VALUES ('Primera noticia','Nodejs está de baja')