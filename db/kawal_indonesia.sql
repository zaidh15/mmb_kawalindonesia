-- Tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    no_hp VARCHAR(15),
    UNIQUE KEY (username),
    UNIQUE KEY (email)
);

-- Table projects
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    id_project_owner INT,
    deskripsi TEXT,
    FOREIGN KEY (id_project_owner) REFERENCES users(id)
);


-- Insert data dummy
INSERT INTO users (nama, username, email, no_hp) VALUES
    ('User1', 'user1', 'user1@example.com', '1234567890'),
    ('User2', 'user2', 'user2@example.com', '9876543210'),
    ('User3', 'user3', 'user3@example.com', '5678901234');

INSERT INTO projects (nama, id_project_owner) VALUES
    ('Proj1', 1, 'abc'),
    ('Proj2', 2, 'desk'),
    ('Proj3', 3, 'deskripsi');
