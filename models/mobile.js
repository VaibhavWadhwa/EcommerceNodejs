const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mobile = require('../utility/mobile');

const mobileSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Mobile = mongoose.model('Mobile',mobileSchema)


// Mobile.create(...mobile).then(() => console.log("Added"))
module.exports = Mobile;