const userModel = require('../models/UserModel')

async function getAll(req, res) {
  try {
    const result = await userModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data user' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await userModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data user berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await userModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data user' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data user ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await userModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data user' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data user ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await userModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data user ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data user ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }