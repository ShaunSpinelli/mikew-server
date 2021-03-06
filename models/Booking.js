const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Booking = new Schema({
    date: String,
	startTime:String,
	endTime:String,
	clientId:String,
    cost:Number,
    info:String,
	bookingStatus:String 
})

module.exports = mongoose.model('Booking', Booking)