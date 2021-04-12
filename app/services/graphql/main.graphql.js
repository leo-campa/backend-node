const { stitchSchemas } = require('graphql-tools')
const { userSchema } = require('./schemas/user.schema')

const buildSchemas = stitchSchemas({ subschemas: [userSchema] })

module.exports = { buildSchemas }

