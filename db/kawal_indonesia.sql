-- Tabel users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_depan VARCHAR(255) NOT NULL,
    nama_belakang VARCHAR(255),
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    no_hp VARCHAR(15),
    status_user INT NOT NULL DEFAULT 0, -- 1 for active, 0 for inactive
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
INSERT INTO users (nama_depan, nama_belakang, username, email, no_hp, status_user) VALUES
    ('User', 'a', 'user1', 'user1@example.com', '1234567890', 1), -- Active user
    ('User', 'b', 'user2', 'user2@example.com', '9876543210', 1), -- Active user
    ('User', 'c', 'user3', 'user3@example.com', '5678901234', 0); -- Inactive user



INSERT INTO projects (nama, id_project_owner, deskripsi) VALUES
    ('Proj1', 1, 'abc'),
    ('Proj2', 2, 'desk'),
    ('Proj3', 3, 'deskripsi');
