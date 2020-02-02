require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Listing = require('./models/listing')
const axios = require('axios')
const req = require('request');


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


setTimeout(app.post('/api/listings', (request, response) => {
  const body = request.body
 
  const key = process.env.REACT_APP_GEOCODE_KEY
  const address = body.window.address.split("+") + ",+Montreal,+QC"
  req(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}}&key=${key}`, { json: true }, (err, res, coords) => {
      if (err) { return console.log(err); }
      
        const nlat = toString(coords["geometry"].location.lat)
        const nlng = toString(coords["geometry"].location.lng)
        const listing = new Listing({
          posn: { lat:nlat,
            lng: nlng,
          },
          window: body.window,
          posting: body.posting,
        })

        listing.save().then(savedListing => {
          response.json(savedListing.toJSON())
        })
      console.log(coords.url);
      console.log(coords.explanation);
  });

  
}), 10000);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})