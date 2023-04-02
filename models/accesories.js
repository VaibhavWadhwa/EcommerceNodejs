const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const accesories = require('../utility/accesories');

const accesoriesrSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const Accesories = mongoose.model('Accesories',accesoriesrSchema)


// Accesories.create(...accesories).then(() => console.log("Added"))
module.exports = Accesories;