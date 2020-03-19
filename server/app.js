const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))

// Serve our static files
app.use(express.static(__dirname + '/../public'));