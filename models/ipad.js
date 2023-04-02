const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ipad = require('../utility/ipad');

const ipadSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Ipad = mongoose.model('Ipad',ipadSchema)


// Ipad.create(...ipad).then(() => console.log("Added"))
module.exports = Ipad;