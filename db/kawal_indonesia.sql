-- Tabel users
CREATE TABLE IF NOT EXISTS users (
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


-- -- Table projects
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    id_project_owner INT,
    deskripsi TEXT,
    FOREIGN KEY (id_project_owner) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS tipe_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  tipe_wilayah VARCHAR(255) NOT NULL,
  orderan INT,
  user_terdaftar INT,
  akses INT
);

CREATE TABLE IF NOT EXISTS forms (
    id SERIAL PRIMARY KEY,
    nama_form VARCHAR(255) NOT NULL,
    kode_form VARCHAR(255) NOT NULL,
    deskripsi TEXT NOT NULL,
    masa_berlaku DATE NOT NULL,
    pembuat_form VARCHAR(255) NOT NULL,
    status BOOLEAN,
    form_json TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


Insert data dummy
INSERT INTO users (nama_depan, nama_belakang, username, email, no_hp, status_user) VALUES
    ('John', 'Sin', 'john_sin', 'johnsin@example.com', '1234567890', 1), -- Active user
    ('Mamat', 'Tar', 'mamattar', 'mamattar@example.com', '9876543210', 1), -- Active user
    ('Tira', 'Li', 'tira_li', 'tirali@example.com', '5678901234', 0); -- Inactive user



INSERT INTO projects (nama, id_project_owner, deskripsi) VALUES
    ('John Satu', 1, 'Merupakan project untuk real count data'),
    ('Mamat Dua', 2, 'real count data untuk jabar II'),
    ('Tira Jabar', 3, 'project quick count data');


INSERT INTO tipe_user (nama, tipe_wilayah, orderan, user_terdaftar, akses) VALUES
    ('Admin Dapil Jatim 4', 'Dapil RI', 1, 20, 1),
    ('Admin Kota', 'Kota/Kabupaten', 2, 5, 1);

INSERT INTO forms (nama_form, kode_form, deskripsi, masa_berlaku, pembuat_form, status, form_json)
VALUES
    ('Data User', 'DS', 'Ini data user', '2023-12-31', 'Saksi TPS', true, 
    '{"title": "DATA SURVEI USER",
    "logoPosition": "right",
    "pages": [
    {
    "name": "page1",
    "elements": [
        {
        "type": "text",
        "name": "question1",
        "title": "Nama",
        "isRequired": true
        },
        {
        "type": "text",
        "name": "question2",
        "title": "Usia",
        "isRequired": true,
        "inputType": "number"
        },
        {
        "type": "radiogroup",
        "name": "question3",
        "title": "Pilihan",
        "isRequired": true,
        "choices": [
        {
        "value": "Item 1",
        "text": "NO 1"
        },
        {
        "value": "Item 2",
        "text": "NO 2"
        },
        {
        "value": "Item 3",
        "text": "NO 3"
        }
        ]
        }
    ]
    }
    ]
    }');