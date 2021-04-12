
const superTest = require('supertest')
const app = require('../../app.controller')
const request = superTest(app)


const query = `mutation CreateUser($input: UserInput) {
    createUser(input: $input) {
            name,
            address,
            customer_id
    }
}
`
const input = {
    name: "Teste",
    address: "Teste Street",
    customer_id: "6062480dd4f601e259ae484b" 
}

test('CREATED USER', async () => {
    const body = {
        query,
        variables: { input } 
    }

    const response = 
        await request 
        .post('/graphql') 
        .send(body) 
        .set('Accept', 'application/json') 

    const receivedObject = response.body.data.createUser
    const expectedObject = {
        name: "Teste",
        address: "Teste Street",
        customer_id: "6062480dd4f601e259ae484b"
    }

    expect(receivedObject).toEqual(expectedObject)

})
