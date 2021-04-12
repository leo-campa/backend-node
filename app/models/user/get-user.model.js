const mongoose = require('mongoose')
const models = require('../../services/database/schemas/index.mongo.schema')

async function getUserById(id) {
    const user = await models.users.aggregate(
        [{ $match: { _id: mongoose.Types.ObjectId(id) } },
        {
            $lookup: {
                from: 'customers',
                localField: 'customer_id',
                foreignField: '_id',
                as: 'customer'
            }
        }])

       return user[0]
}


module.exports = { getUserById }