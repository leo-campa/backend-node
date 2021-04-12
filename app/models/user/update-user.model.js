const models = require('../../services/database/schemas/index.mongo.schema')
const { ObjectId } = require('mongodb')


async function updateUser(input) {
    const user = await models.users.findByIdAndUpdate(ObjectId(input.id), input.user)

    return user
}



async function deleteUser(id) {
    const user = await models.users.findByIdAndDelete(ObjectId(id))

    return user
}

module.exports = { updateUser, deleteUser }