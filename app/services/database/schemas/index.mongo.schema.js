const users = require('./user.mongo.schema').userModel
const customers = require('./customer.mongo.schema').customerModel


module.exports = { customers, users }