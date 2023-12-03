const tipeUserModel = require('../models/TipeUserModel')

async function getAll(req, res) {
  try {
    const result = await tipeUserModel.ambilSemua()
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengambil data tipe user' })
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id
    const result = await tipeUserModel.ambilBerasarkanId(id)
    res.json({ data: result })
  } catch (error) {
    console.log('Error : ', error)
    res
      .status(500)
      .json({ message: 'Error saat mengambil data tipe user berdasarkan ID ' })
  }
}

async function create(req, res){
  try{
    const data = req.body
    const result = await tipeUserModel.create(data)
    res.status(201).json({message: "Data Berhasil ditambahkan"})
  }catch(error){
    res.status(500).json({message: "server error", sereverMessage: error})
  }
}

async function update(req, res) {
  try {
    const id = req.params.id
    const dataUpdate = req.body
    const result = await tipeUserModel.ubah(id, dataUpdate)
    res.json({ message: 'Berhasil mengubah data tipe user' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat mengubah data tipe user ' })
  }
}

async function destroy(req, res) {
  try {
    const id = req.params.id
    const result = await tipeUserModel.hapus(id)
    res.json({ message: 'Berhasil menghapus data tipe user ' })
  } catch (error) {
    console.log('Error : ', error)
    res.status(500).json({ message: 'Error saat menghapus data tipe user ' })
  }
}

module.exports = { getAll, getById, create, update, destroy }