const db = require('../config/database')

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      `SELECT 
        f.id,
        f.nama_form,
        f.kode_form,  
        f.deskripsi, 
        f.masa_berlaku, 
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