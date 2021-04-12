const model = require('../../../models/user/user.index.model')
const userResolvers = {
    Query: {
        getUserById(_, { userId }) {
            return model.getUser(userId)
        }
    },
    User: {
        id: ({ _id }) => _id,
        name: ({ name }) => name,
        address: ({ address }) => address,
        customer_id: ({ customer_id }) => customer_id,
        customer: ({ customer }) => customer[0]
    },
    Customer: {
        id: ({ _id }) => _id,
        name: ({ name }) => name,
        product: ({ product }) => product
    },
    Mutation: {
        async createUser(_, { input }) {
            console.log(input)
            return await model.createUser(input)
        },
        async updateUser(_, { input }) {
            return await model.updateUser(input)
        },
        async deleteUser(_, { id }) {
            return await model.deleteUser(id)
        }
    }

}
module.exports = { userResolvers }