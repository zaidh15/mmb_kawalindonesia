const projectModel = require('../models/ProjectModel')

async function getAll(req, res) {
  try {
    const result = await projectModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data project' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await projectModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data project berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await projectModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data project' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data project ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await projectModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data project' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data project ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await projectModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data project ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data project ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }