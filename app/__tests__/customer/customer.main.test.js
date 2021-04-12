
const customerTests = require('../test-files').pathTests.customer
describe('Customers', () => {
    customerTests.forEach(file => require(file))
})