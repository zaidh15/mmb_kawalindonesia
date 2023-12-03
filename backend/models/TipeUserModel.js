const db = require('../config/database')

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute('SELECT * FROM tipe_user'
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
      'SELECT * FROM tipe_user WHERE id = ? ', [id]
    )
    return rows
  } finally {
    conn.release()
  }
}

async function create(data) {
  const conn = await db.getConnection()
  try {
    const kolom = Object.keys(data).join(",") 
    const values = Object.values(data) 
    const placeholders = values.map(() => '?').join(',') 
    const query = `INSERT INTO tipe_user (${kolom}) VALUES (${placeholders})`
    const result = await conn.execute(query, values)
    return result
  } catch(error){
    console.error("Terjadi kesalahan saat memasukan data", error);
    throw error;
  }
  finally {
    conn.release()
  }
}

async function ubah(id, data) {
  const conn = await db.getConnection()
  try {
    const updateQuery = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(',')
    const values = Object.values(data)
    const query = `UPDATE tipe_user
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
    const result = conn.execute('DELETE FROM tipe_user WHERE id = ?;', [id])
    return result
  } finally {
    conn.release()
  }
}

module.exports = { ambilSemua, ambilBerasarkanId, create, ubah, hapus }