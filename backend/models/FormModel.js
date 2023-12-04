const db = require('../config/database')

const updateStatus = () => {
  const currentDate = new Date().toISOString().split('T')[0];

  db.query(
      'UPDATE forms SET status = "tidak_aktif" WHERE tanggal_berlaku < ?',
      [currentDate],
      (err, result) => {
          if (err) {
              console.error('Error updating status:', err);
              return;
          }
          console.log('Status updated successfully');
      }
  );
};

// Schedule the update task (every day at midnight)
setInterval(updateStatus, 24 * 60 * 60 * 1000);

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      `SELECT 
        f.id,
        f.nama_form,
        f.kode_form,  
        f.deskripsi, 
        f.tanggal_buat, 
        f.tanggal_berlaku, 
        f.pembuat_form,
        f.status,
        f.form_json
      FROM forms f`
    )
    return rows
  } finally {
    conn.release()
  }
}

async function ambilBerasarkanId(id) {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      'SELECT * FROM forms WHERE id = ? ',
      [id]
    )
    return rows
  } finally {
    conn.release()
  }
}

async function tambah(data) {
  const conn = await db.getConnection();
  try {
    const kolom = Object.keys(data).join(',');
    const values = Object.values(data);
    const tandaTanya = values.map(() => '?').join(',');
    const query = `INSERT INTO forms (${kolom}) VALUES (${tandaTanya})`;
    const result = await conn.execute(query, values);
    return result;
  } finally {
    conn.release();
  }
}


async function ubah(id, data) {
  const conn = await db.getConnection()
  try {
    const updateQuery = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(',')
    const values = Object.values(data)
    const query = `UPDATE forms
                  SET ${updateQuery}
                  WHERE id=?;`
    const result = await conn.execute(query, [...values, id])
    return result
  } finally {
    conn.release()
  }
}

async function hapus(id) {
  const conn = await db.getConnection()
  try {
    const result = conn.execute('DELETE FROM forms WHERE id = ?;', [id])
    return result
  } finally {
    conn.release()
  }
}



module.exports = { ambilSemua, ambilBerasarkanId, tambah, ubah, hapus }