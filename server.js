
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

app.get('/five', function (req, res) {
    res.render('5Level')
});

app.get('/two', function (req, res) {
    res.render('2Level')
});

app.get('/three', function (req, res) {
    res.render('3Level')
});

app.get('/four', function (req, res) {
    res.render('4Level')
});

app.get('/pageone', function (req, res) {
    res.render('1Level')
});

app.get('/ins', function (req, res) {
    res.render('instructions')
});

app.get('/results', function (req, res) {
    res.send({results:'returning these results from the server'})
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!')
});