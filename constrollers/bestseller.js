const BestSeller = require('../models/bestseller')

const getBestSellerDetailsController = (req,res) =>{
    try{
        BestSeller.find({}).then((data) => {
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

const getBestSellerDetailsByIdController = (req,res) =>{
    const id = req.params.id;
    if(id){
        BestSeller.findOne({id}).then(data =>{
        if(data){
            res.status(200).json({
                message : "success",
                bestseller : data
            })
        }else{
            res.status(401).json({
                message : "failed",
                bestseller : {}
            })
        }
       }).catch(err =>{
        res.status(401).json({
            message : "failed",
            bestseller : {}
        })
       })
    
    }else{
        res.status(401).json({
            message : "failed",
            bestseller : {}
        })
    }
}

module.exports = {getBestSellerDetailsController,getBestSellerDetailsByIdController};