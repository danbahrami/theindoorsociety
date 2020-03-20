import express from 'express';
import bodyParser from 'body-parser';

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))

app.use(bodyParser.json());

// Serve the client app
app.use(express.static(__dirname + '/../public'));

// Add api routes
require('./routes')(app);