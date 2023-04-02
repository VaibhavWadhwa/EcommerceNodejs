const FeaturedProducts = require('../models/featuredproducts')

const getFeaturedProductsDetailsController = (req,res) =>{
    try{
        FeaturedProducts.find({}).then((data) => {
        res.status(200).json({
            message : "success",
            details : data
        })
    }).catch(err =>{
        res.status(500).json({
            message : err,
            details : []
        })
    })
    }catch(err){
        res.status(500).json({
            message : err,
            details : []
        })
    }
};

const getFeaturedProductsDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        FeaturedProducts.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                featuredproducts : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                featuredproducts : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            featuredproducts : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            featuredproducts : {}
        })
    }
}

module.exports = {getFeaturedProductsDetailsController,getFeaturedProductsDetailsByIdController};