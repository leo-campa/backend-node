const moment = require('moment')

const documents = [
    {
        _id: '6062480dd4f601e259ae484b',
        name: 'Seed 1',
        address: 'Seed Street 1',
        created_at: moment().toISOString(),
        customer_id: '6062480dd4f601e259ae484b'
    },
    {
        name: 'Seed 2',
        address: 'Seed Street 2',
        created_at: moment().toISOString(),
        customer_id: '6062480dd4f601e259ae484b'
    }
]

const userSeed = {
    model: 'users',
    documents
}

module.exports = { userSeed }