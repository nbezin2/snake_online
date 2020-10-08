var express = require('express');
var app = express();

var server = app.listen(3000); //Run on server port 3000
app.use(express.static('public')); //When a client get to the page display files in public folder
