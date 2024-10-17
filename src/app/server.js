const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/portfolio-app'));

// Handle all routes and serve index.html as fallback
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/portfolio-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
