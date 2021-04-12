
const { makeExecutableSchema } = require('graphql-tools');
const resolver = require('../resolvers/user.resolver')
const userTypeDefs = `

type Customer {
    id: ID!
    name: String
    product: String
}

type User {
    id: ID!
    name: String
    address: String
    customer_id: String!
    customer: Customer
}

input UserInput {
    name: String
    address: String
    customer_id: String!
}

input UserUpdateInput{
    id: String
    user: UserInput
}

type Query {
    getUserById(userId: String!): User
   
}

type Mutation {
    createUser(input: UserInput): User
    updateUser(input: UserUpdateInput): User
    deleteUser(id: String): User
}
`;

const userSchema = makeExecutableSchema({ typeDefs: userTypeDefs, resolvers: resolver.userResolvers })
module.exports = { userSchema }