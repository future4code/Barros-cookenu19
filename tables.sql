-- Active: 1674082174016@@35.226.146.116@3306@jbl-4416524-renato-araujo

CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    createdAt VARCHAR(64),
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES Cookenu_users(id)
);