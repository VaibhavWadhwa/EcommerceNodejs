const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const MongoClient = require('mongoose');

const CONSTANTS = require('./config/constant');

const accesoriesRouter = require('./routes/accesories');
const macbookRouter = require('./routes/macbook');
const ipadRouter = require('./routes/ipad');
const mobileRouter = require('./routes/mobile');
const bestsellerRouter = require('./routes/bestseller');
const featuredproductsRouter = require('./routes/featuredproducts');

const app = express();
app.use(cors())


app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use("/accesories",accesoriesRouter);
app.use("/macbook",macbookRouter);
app.use("/ipad",ipadRouter);
app.use("/mobile",mobileRouter);
app.use("/bestseller",bestsellerRouter);
app.use("/featuredproducts",featuredproductsRouter);



app.listen(CONSTANTS.PORT, ()=>{
    MongoClient.connect("mongodb+srv://Vaibhav:Vaibhav@cluster0.2smqqim.mongodb.net/Ecommerce?retryWrites=true&w=majority").then(() =>{
    }).catch(err => console.log(err));
    console.log(`Server is listening at http://localhost:${CONSTANTS.PORT}`)
})
