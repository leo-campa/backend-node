const moment = require('moment')

const documents = [
    {
        _id: '6062480dd4f601e259ae484b',
        name: 'Seed Customer 1',
        product: 'Seed Product',
        created_at: moment().toISOString()
    }
]

const customerSeed = {
    model: 'customers',
    documents
}

module.exports = { customerSeed }