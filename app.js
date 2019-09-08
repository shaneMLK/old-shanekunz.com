var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const messages = require('./db/messages');

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(logger('tiny'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('/danardos', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/danardos.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/contact.html'));
});
app.get('/messages', (req, res) => {
  messages.getAll().then((messages) => {
      res.json(messages);
  });
});

app.post('/messages', (req, res) => {
  console.log(req.body);
  messages.create(req.body).then((message) => {
      res.json(message);
  }).catch((error) => {
      res.status(500);
      res.json(error);
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
