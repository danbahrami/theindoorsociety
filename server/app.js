import express from 'express';
import bodyParser from 'body-parser';
var path = require('path');

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))

app.use(bodyParser.json());

// Serve the client app
app.get('/activity/new', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.use(express.static(path.join(__dirname, '../public')));

// Add api routes
require('./routes')(app);
