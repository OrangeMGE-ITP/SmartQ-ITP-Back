const {Schema, model, Types} = require('mongoose');

const QueueSchema = new Schema({
    "user_id" : { type: String, required: true },
    "title" : { type: String },
    "keyword" : { type: String, required: true },
    "description" : { type: String },
    "date" : { type: String },
    "wrap" : { type: Boolean, default: false },     
    "units" : [],
    "ticketNum" : { type: Number },
    "idNum" : { type: Number },
    "active" : { type: Boolean, default: true }
})


module.exports = model( 'Queue', QueueSchema );