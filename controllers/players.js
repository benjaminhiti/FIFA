const Player = require('../models/players');
const Club = require('../models/players');
const Transfers = require('../models/transfers')

const createPlayer = async (req, res, next) => {
    try {
        const player = new Player(req.body)
        const newPlayer = await player.save()
        res.status(200).json({
        success:true,
        data:newPlayer
    })
    } 
    catch (e) {
       next(e) 
    }
}

const updatePlayer = async (req, res, next ) => {
  try{
    const player = await Player.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:player
  })
}
catch(e){
    next(e)
}
}

async function getOnePlayer(req, res, next) {
    try {
        const player = await Player.find({_id:req.params._id})
        res.status(200).json({
            success:true,
            data:player
        })} 
    catch (e) {
        next(e)
    }
}

async function getAllPlayers(req, res, next) {
    try {
        const player = await Player.find()
        res.status(200).json({
            success:true,
            data:player
        })
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getAllPlayers,
    getOnePlayer,
    updatePlayer,
    createPlayer
}