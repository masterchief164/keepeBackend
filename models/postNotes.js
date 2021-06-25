const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    title:String,
    content:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const note = mongoose.model("Note",noteSchema);
module.exports = note;