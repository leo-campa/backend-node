const models = require('../../services/database/schemas/index.mongo.schema')

async function createUser(input) {
    const user = await models.users.create(input)

    console.log(user)
    return user
}


module.exports = { createUser }