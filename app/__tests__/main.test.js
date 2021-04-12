const { feedDatabase } = require('../services/database/seeds/feed-database.seeds')
const { connectDB } = require('../services/database/mongodb.service')
const { pathTests } = require('./test-files')
const fs = require('fs')
const mongoose = require('mongoose')

beforeAll(async () => {
    await feedDatabase()
    await connectDB()
})

afterAll(async () => {
    fs.unlink(`${__dirname}/test-files.js`, () => { })
    await mongoose.disconnect()
})

Object.keys(pathTests).forEach(test => {
    require(`./${test}/${test}.main.test.js`)
})
