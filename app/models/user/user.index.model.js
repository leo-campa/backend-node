const createUser = require('./create-user.model').createUser
const getUser = require('./get-user.model').getUserById
const { updateUser, deleteUser } = require('./update-user.model')

module.exports = { createUser, getUser, updateUser, deleteUser }