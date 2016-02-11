var express = require('./node_modules/express');
var app = express();

app.get('/',function(req,res,next){
    res.send('Herzlich Willkommen')
    next();
});

app.listen(8080);