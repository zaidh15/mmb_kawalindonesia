const express = require('express')
const router = express.Router()
const projectController = require('../controllers/ProjectController')


router.get('/projects', projectController.getAll)
router.get('/project/:id', projectController.getById)
router.post('/project', projectController.create)
router.put('/project/:id', projectController.update)
router.delete('/project/:id', projectController.destroy)



module.exports = router