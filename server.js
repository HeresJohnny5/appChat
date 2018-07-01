var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
// Serve static content for the app from the “public” directory in the application directory:

let server = app.listen(3000, () => {
  console.log('App Chat is listening on port 3000!'), server.address().port
});
