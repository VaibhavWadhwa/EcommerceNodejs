const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const macbook = require('../utility/macbook');

const macbookSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Macbook = mongoose.model('Macbook',macbookSchema)


// Macbook.create(...macbook).then(data => console.log("sdsd"));
module.exports = Macbook;