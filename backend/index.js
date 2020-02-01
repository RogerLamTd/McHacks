const express = require('express')
const app = express()

let listings = [
    {
        id: 1,
        lat: -25.363,
        lng: 131.044,
        address: 'asdfasdfasdfasd',
        info: 'linktoindividualpostingwithmoreinfo'
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/listings', (req, res) => {
    res.json(listings)
})

const PORT = 3001
app.listen(PORT)
console.log('Server running on port ${PORT}')