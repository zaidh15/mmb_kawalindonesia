const express = require('express')
const router = express.Router()
const projectController = require('../controllers/ProjectController')
const userController = require('../controllers/UserController')
const formController = require('../controllers/FormController')


router.get('/users', userController.getAll)
router.get('/user/:id', userController.getById)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.destroy)


router.get('/projects', projectController.getAll)
router.get('/project/:id', projectController.getById)
router.post('/project', projectController.create)
router.put('/project/:id', projectController.update)
router.delete('/project/:id', projectController.destroy)

router.get('/forms', formController.getAll)
router.get('/form/:id', formController.getById)
router.post('/form', formController.create)
router.put('/form/:id', formController.update)
router.delete('/form/:id', formController.destroy)


module.exports = router