var express = require('express');
var translator = require('./Translate');
var this_translator = new translator();

var app = express();

app.use(function(req, res, next){
    console.log((new Date()).toString() + " " + req.method + " " + req.url + " " + res.statusCode);
    next();
});

app.get('/', function(req, res){
    res.end("success");
});

app.get('/unzombify', function(req, res){
    var query = req.query.q;
    if(query.length > 1000) {
        res.status(414).end("414 Error: text too long.");
    }
    var resobj = {"result":this_translator.translateToEnglish(query).translation};
    res.json(resobj);
});

app.get('/zombify', function(req, res){
    var query = req.query.q;
    if(query.length > 1000) {
        res.status(414).end("414 Error: text too long.");
    }
    var resobj = {"result":this_translator.translateToZombie(query).translation}
    res.json(resobj);
});

app.listen(7000, function() {
    console.log("Listening on port 7000");
});

