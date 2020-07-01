const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/users', usersController.getUsers);

router.post('/user', usersController.createUser);

router.put('/user', usersController.updateUser);

router.delete('/user', usersController.deleteUser);

module.exports = router;