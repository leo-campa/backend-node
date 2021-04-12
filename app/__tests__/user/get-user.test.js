
const superTest = require('supertest')
const app = require('../../app.controller')
const request = superTest(app)


const query = `
query GetUser($userId: String!){
    getUserById(userId: $userId) {
       id,
       name,
       address,
       customer {
           id,
           name,
           product
       }
   }
}
`

const userId = '6062480dd4f601e259ae484b'

test('FOUND USER', async () => {
    const body = {
        query,
        variables: { userId }
    }

    const response = await request.get('/graphql')
        .send(body)
        .set('Accept', 'application/json')

    const receivedResponse = response.body.data.getUserById
    const expectedResponse = {
        id: '6062480dd4f601e259ae484b',
        name: 'Seed 1',
        address: 'Seed Street 1',
        customer: {
            id: '6062480dd4f601e259ae484b',
            name: 'Seed Customer 1',
            product: 'Seed Product'
        }
    }

    expect(receivedResponse).toEqual(expectedResponse)
    return response
})
