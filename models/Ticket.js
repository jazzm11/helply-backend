const {Schema, model}= require("mongoose");
const { type } = require("os");


const ticketSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type:String,
        required: true
    },
    content:{
        type: String,
    },
    status:{
        type: String,
        required:true
    },
    priority:{
        type: String,
        required:true
    },
    privacy:{
        type: String,
        required: true
    }
},{timestamps:true})

const Ticket = model("tickets", ticketSchema)

module.exports = Ticket
