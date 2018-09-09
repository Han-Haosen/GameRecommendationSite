var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
    var data = req.app.get('appData');
    var gamePhotos = [];
    data.Games.forEach(function(item){
        gamePhotos = gamePhotos.concat(item.artwork);
    })
    res.render('index',{
        ID:'index'
    });
    /*var dataFile = req.app.get('appData');
    var info = '';
    dataFile.Games.forEach(function(item){
        info += `
        <li>
            <h2>${item.title}</h2>
            <p>${item.comment}<p>
        </li>
        `;
    });
    res.send(`${info}`);
    */
});

module.exports = router;