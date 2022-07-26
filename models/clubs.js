const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
        unique : true
    },

    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'players'
    }],
    established: String,
    })

const Club = model.mongoose('clubs', clubSchema);

module.exports = Club;