
const userTests = require('../test-files').pathTests.user


describe('USERS', () => {
    userTests.forEach(file => require(file))
})