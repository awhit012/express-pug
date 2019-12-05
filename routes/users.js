const express = require('express');
const router = express.Router();
const userController = require('../controllers/users')

router.get('/', userController.getAll);
router.get('/new', userController.new);
router.get('/:id', userController.getOne);
router.get('/:id/edit', userController.editForm);
router.post('/', userController.create);
router.post('/editUser', userController.update);
router.get('/:id/delete', userController.delete)


module.exports = router;
