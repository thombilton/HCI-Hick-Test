
const express = require('express');
const app = express();
var path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    res.render('index')
});
app.get('/participant_info', function (req, res) {
    res.render('participant_info')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});