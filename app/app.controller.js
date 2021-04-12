const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const { buildSchemas } = require('./services/graphql/main.graphql')
const connectDB = require('./services/database/mongodb.service')
const appServer = express();

const isTestEnv = process.env.NODE_ENV === 'test'
appServer.use('/graphql', bodyParser.json(), graphqlHTTP({
    schema: buildSchemas
}))


if (!isTestEnv) {
    connectDB
}

const app = isTestEnv ? appServer : appServer.listen(3000)

module.exports = app
