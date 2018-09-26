
const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.render('index')
});

app.get('/participant_info', function (req, res) {
    res.render('participant_info')
});

app.get('/ready', function (req, res) {
    res.render('ready')
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});