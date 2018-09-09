var express = require('express');
var router = express.Router();



router.get('/description/:gameId',function(req,res){
    var dataFile = req.app.get('appData');
    var game = dataFile.Games[req.params.gameId - 1];
    res.send(`
    <h1>${game.title}</h1>
    <p>${game.description}</p>
    `);
});

router.get('/description/',function(req,res){
    var dataFile = req.app.get('appData');
    var out = '';
    dataFile.Games.forEach(function(item){
        out += `
        <li>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
        </li>
        <br/>
        `;
    }
    )
    res.send(`
    ${out}
    `);
});

module.exports = router;