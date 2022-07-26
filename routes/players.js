const express = require('express');
const router = express.Router({mergeParams:true});

const {getAllPlayers,createPlayer,updatePlayer} = require('../controllers/players')
const app = express()

router.route('/').get(getAllPlayers).post(createPlayer).patch(updatePlayer)

module.exports = router