const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWEAR
app.use(express.static(__dirname + '/public'));
// Serve static content for the app from the “public” directory in the application directory
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// What comes from the browser is URL encoded and so you must setup bodyParser to support such

let messages = [
  {name: 'John', message: 'Hello John'},
  {name: 'Lena', message: 'Hello Lena'}
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

app.post('/messages', (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

let server = app.listen(3000, () => {
  console.log('App Chat is listening on port 3000!'), server.address().port
});
