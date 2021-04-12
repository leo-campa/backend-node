const { ObjectId } = require('bson')
const moment = require('moment')
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    customer_id: { type: ObjectId, required: true, ref: 'customers' },
    created_at: { type: Date, required: true, default: moment().toISOString() },
    updated_at: { type: Date, required: false }
})

const userModel = mongoose.model('users', userSchema)


module.exports = { userModel }