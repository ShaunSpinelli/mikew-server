const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contact = new Schema({
    name: String,
    email: String,
    phone: String,
    artist: String,
    comment: String,
    createdAt: String

})

module.exports = mongoose.model('Contact', Contact)