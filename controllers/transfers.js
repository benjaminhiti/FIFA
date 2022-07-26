const Transfers = require('../models/transfers')

const createTransfer = async (req, res, next) => {
    try {
        const transfer = new Transfers(req.body)
        const newTransfer = await transfer.save()
        res.status(200).json({
        success:true,
        data:newTransfer
    })
    } 
    catch (e) {
       next(e) 
    }
}

const updateTransfer = async (req, res, next ) => {
  try{
    
    const transfer = await Transfers.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:transfer
  })
}
catch(e){
    next(e)
}
}

async function getOneTransfer(req, res, next) {
    try {
        const transfer = await Transfers.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:transfer
        })} 
    catch (e) {
        next(e)
    }
}

async function getAllTransfers(req, res, next) {
    try {
        const transfer = await Transfers.find()
        res.status(200).json({
            success:true,
            data:transfer
        })
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getAllTransfers,
    createTransfer,
    getOneTransfer,
    updateTransfer
}