var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(logger('tiny'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/danardos', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/danardos.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
