const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Just a test')
})


app.listen(port, () => {
    console.log(`Server listening on localhost${port}`)
})
