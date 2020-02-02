require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Listing = require('./models/listing')


app.use(express.static('build'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/listings', (request, response) => {
  Listing.find({}).then(listings => {
    response.json(listings.map(listing => listing.toJSON()))
  });
});

app.get('/api/listings/:id', (request, response) => {
  Listing.findById(request.params.id)
  .then(listing => {
    if (listing){
      response.json(listing.toJSON())
    } else {
      response.status(404).end()
    }
  })
  .catch(error => {
    console.log(error)
    response.status(400).send({ error: 'malformatted id' })
  })
})

app.delete('/api/listings/:id', (req, res, next) => {
  const id = Number(req.params.id)
  listings = listings.filter(listing => listing.id !== id)

  res.status(204).end()
})


app.post('/api/listings', (request, response) => {
  const body = request.body

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