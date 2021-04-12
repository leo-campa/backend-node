const mongoose = require('mongoose');

async function connectDB() {
    const connectionURI = 'mongodb://admin:test@localhost:27017,localhost:27027,localhost:27037/test?replicaSet=rs0'
    await mongoose.connect(connectionURI, { useNewUrlParser: true, socketTimeoutMS: 30000, poolSize: 50 })
}


module.exports = { connectDB }