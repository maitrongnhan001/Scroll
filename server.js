var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.get('/',function(req,res) {
    res.sendfile(__dirname + '/public/index.html');
    console.log("Successfully");
});

app.use(express.static('public'));
server.listen(8000);