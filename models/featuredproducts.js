const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const featuredproducts = require('../utility/featuredproducts');

const featuredproductsSchema = new Schema({
    id :  Number,
    category : String,
    name : String,
    ratting : String,
    image : String,
    price : String,
    oPrice : String,
    quantity : String
})

const FeaturedProducts = mongoose.model('FeaturedProducts',featuredproductsSchema)


// FeaturedProducts.create(...featuredproducts).then(() => console.log("Added"))
module.exports = FeaturedProducts;