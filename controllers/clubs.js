const Club = require('../models/clubs');
const Player = require('../models/players');
const transfers = require('../models/transfers');

async function createClub(req,res,next) {
    try{
        const club = new Club(req.body)
        players 
        const newClub = await club.save()
        res.status(200).json({
        success:true,
        data:newClub
    })
}
    catch(e){
        next(e)
    }
}

async function updateClub(req,res, next) {
    try{
        const club = await Club.findByIdAndUpdate(req.params._id, req.body,{new:true})
        res.status(200).json({
            success:true,
            data:club
         })
    }
    catch(e){
        next(e)
    }
}

async function getOneClub(req, res, next){
    try{
        const club = await Club.findOne(req.params._id)
        res.status(200).json({
            success: true,
            data: club
         })
        }
        catch(e){
            next(e)
        }
}

async function getAllClubs(req, res, next) {
    try{
        const club = await Club.find()
        res.status(200).json({
            success: true,
            data: club
        })
    }
    catch(e){
        next(e)
    }

}