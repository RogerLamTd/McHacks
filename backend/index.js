require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Listing = require('./models/listing')


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/listings', (request, response) => {
  Listing.find({}).then(listings => {
    response.json(listings.map(listing => listing.toJSON()))
  });
});

app.get('/api/listings/:id', (request, response) => {
  Listing.findById(request.params.id).then(listing => {
    response.json(listing.toJSON())
  })
})

app.delete('/listings/:id', (req, res) => {
  const id = Number(req.params.id)
  listings = listings.filter(listing => listing.id !== id)

  res.status(204).end()
})

app.post('/api/listings', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const listing = new Listing({
    posn: body.posn,
    window: body.window,
    posting: body.posting,
  })

  listing.save().then(savedListing => {
    response.json(savedListing.toJSON())
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})