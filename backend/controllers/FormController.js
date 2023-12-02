const formModel = require('../models/FormModel')

async function getAll(req, res) {
  try {
    const result = await formModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data form' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await formModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data form berdasarkan ID ' })
  }
}

async function create(req, res) {
  try {
    const dataBaru = req.body
    const result = await formModel.tambah(dataBaru)
    res.json({ message: 'Berhasil menambahkan data form' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menambahkan data form ' })
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await formModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data form' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data form ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await formModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data form ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data form ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }