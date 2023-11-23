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
    ('John', 'Sin', 'john_sin', 'johnsin@example.com', '1234567890', 1), -- Active user
    ('Mamat', 'Tar', 'mamattar', 'mamattar@example.com', '9876543210', 1), -- Active user
    ('Tira', 'Li', 'tira_li', 'tirali@example.com', '5678901234', 0); -- Inactive user



INSERT INTO projects (nama, id_project_owner, deskripsi) VALUES
    ('John Satu', 1, 'Merupakan project untuk real count data'),
    ('Mamat Dua', 2, 'real count data untuk jabar II'),
    ('Tira Jabar', 3, 'project quick count data');
