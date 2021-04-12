const seeder = require('mongoose-seed')
const models = require('./index.seeds')


async function feedDatabase() {
    const connectionURI = 'mongodb://admin:test@localhost:27017,localhost:27027,localhost:27037/test?replicaSet=rs0'
    const collections = Object.keys(models)
    const dataSeed = collections.map(collection => models[collection])

    await new Promise(resolve => seeder.connect(connectionURI, () => {

        seeder.loadModels(['./app/services/database/schemas/index.mongo.schema.js'])

        seeder.clearModels(collections, () => {
            seeder.populateModels(dataSeed, () => {
                seeder.disconnect()
                resolve()
            })
        })

    }))
}

module.exports = { feedDatabase }

