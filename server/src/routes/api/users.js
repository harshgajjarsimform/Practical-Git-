const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', userController.getAllUsers);

// @route   POST api/users
// @desc    Create a new user
// @access  Public
router.post('/', userController.createUser);

// @route   GET api/users/:id
// @desc    Get user by ID
// @access  Public
router.get('/:id', userController.getUserById);

// @route   PUT api/users/:id
// @desc    Update user by ID
// @access  Public
router.put('/:id', userController.updateUser);

// @route   DELETE api/users/:id
// @desc    Delete user by ID
// @access  Public
router.delete('/:id', userController.deleteUser);

module.exports = router;