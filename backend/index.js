const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/test', function(req, res) {
    res.send('TEST PAGE!');
});

var server = app.listen(3001, function() {});