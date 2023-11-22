const db = require('../config/database')

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      `SELECT 
        u.nama_depan,
        u.nama_belakang,  
        u.username, 
        u.email, 
        u.no_hp,
        u.status_user
      FROM users u`
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
      'SELECT * FROM users WHERE id = ? ',
      [id]
    )
    return rows
  } finally {
    conn.release()
  }
}

async function tambah(data) {
  const conn = await db.getConnection()
  try {
    const kolom = Object.keys(data).join(',') 
    const values = Object.values(data) 
    const tandaTanya = values.map(() => '?').join(',') 
    const query = `INSERT INTO users (${kolom}) VALUES (${tandaTanya})`
    const result = await conn.execute(query, values)
    return result
  } finally {
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
    const query = `UPDATE users
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
    const result = conn.execute('DELETE FROM users WHERE id = ?;', [id])
    return result
  } finally {
    conn.release()
  }
}

module.exports = { ambilSemua, ambilBerasarkanId, tambah, ubah, hapus }