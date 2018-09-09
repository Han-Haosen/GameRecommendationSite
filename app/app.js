var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port',process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine','ejs');
app.set('views','app/views');


app.use(require('./routes/index'))
app.use(require('./routes/descriptions'))
app.use(express.static('app/public'))

app.locals.siteTitle = 'Game Recommendation at Its Finest';
app.locals.Games = dataFile.Games;

var server = app.listen(app.get('port'),function(){
    console.log("up and running with");
})