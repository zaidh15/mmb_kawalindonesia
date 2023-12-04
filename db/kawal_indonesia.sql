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

CREATE TABLE `forms` (
  `id` int(11) NOT NULL,
  `nama_form` varchar(200) NOT NULL,
  `kode_form` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `tanggal_buat` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tanggal_berlaku` date NOT NULL,
  `pembuat_form` varchar(200) NOT NULL,
  `status` enum('aktif','non-aktif') NOT NULL DEFAULT 'aktif',
  `form_json` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`form_json`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- insert dummy
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


INSERT INTO `forms` (`id`, `nama_form`, `kode_form`, `deskripsi`, `tanggal_buat`, `tanggal_berlaku`, `pembuat_form`, `status`, `form_json`) VALUES
(1, 'Form Data Saksi', 'DS', 'Pendataan Saksi', '2023-12-03 13:31:23', '2023-12-06', 'Superadmin', 'aktif', '{\n \"title\": \"Form Data Saksi\",\n \"description\": \"Mendata saksi\",\n \"logoPosition\": \"right\",\n \"pages\": [\n  {\n   \"name\": \"page1\",\n   \"elements\": [\n    {\n     \"type\": \"text\",\n     \"name\": \"question1\",\n     \"title\": \"Nama\",\n     \"isRequired\": true\n    },\n    {\n     \"type\": \"text\",\n     \"name\": \"question2\",\n     \"title\": \"NIK\",\n     \"isRequired\": true\n    }\n   ]\n  }\n ]\n}')