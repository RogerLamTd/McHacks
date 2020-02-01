const http = require('http')
const express = require('express')
const app = express()

let listings = [
    {
        id: 1,
        content: "Henlo",
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/listings', (req, res) => {
    res.json(listings)
})

const PORT = 3001
app.listen(PORT)
console.log('Server running on port ${PORT}')