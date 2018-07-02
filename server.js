var express = require('express');
var app = express();

// MIDDLEWEAR
app.use(express.static(__dirname + '/public'));
// Serve static content for the app from the “public” directory in the application directory

let messages = [
  {name: 'John', message: 'Hello John'},
  {name: 'Lena', message: 'Hello Lena'}
];

app.get('/messages', (req, res) => {
  res.send(messages);
});

let server = app.listen(3000, () => {
  console.log('App Chat is listening on port 3000!'), server.address().port
});
