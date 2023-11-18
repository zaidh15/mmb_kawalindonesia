const db = require('../config/database')

async function ambilSemua() {
  const conn = await db.getConnection()
  try {
    const [rows, fields] = await conn.execute(
      `SELECT 
        p.id,
        p.nama as nama_project, 
        u.nama as nama_project_owner,  
        u.username, 
        u.email, 
        u.no_hp
      FROM projects p
      LEFT JOIN users u on p.id_project_owner = u.id`
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
      'SELECT * FROM projects WHERE id = ? ',
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
    const query = `INSERT INTO projects (${kolom}) VALUES (${tandaTanya})`
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
    const query = `UPDATE projects
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
    const result = conn.execute('DELETE FROM projects WHERE id = ?;', [id])
    return result
  } finally {
    conn.release()
  }
}

module.exports = { ambilSemua, ambilBerasarkanId, tambah, ubah, hapus }