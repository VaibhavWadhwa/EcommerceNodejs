const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bestseller = require('../utility/bestseller');

const bestsellerSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const BestSeller = mongoose.model('BestSeller',bestsellerSchema)


// BestSeller.create(...bestseller).then(() => console.log("Added"))
module.exports = BestSeller;