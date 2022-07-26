const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstname :{
        type: String,
        require: true
    },
    lastname : {
        type: String,
        require: true
    },
    age : {
        type: Number,
        require : true
    },
    nationality : {
        type: String,
        require: true
    },

    currentteam :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clubs'
    },

    formerclub:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'clubs'
    }]
})

const Player = mongoose.model('player', playerSchema);

module.exports = Player;