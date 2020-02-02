const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

/*const url = 
    `mongodb+srv://mchacks:${password}@listings-awwxv.mongodb.net/test?retryWrites=true&w=majority`
*/
  
const listingSchema = new mongoose.Schema({
    posn: {
        lat: String,
        lng: String,
    },
    window: {
        address: String,
        link: String,
        nRooms: String,
    },
    posting: {
        owner: String,
        rent: String,
        email: String,
        phone: String,
        description: String,
    }
})

const Listing = mongoose.model('Listing', listingSchema)

/*
const test = new Listing({
    posn: { 
        lat: "45.504702",
        lng: "-73.579449" 
    },
    window: { 
        address: "3641 McTavish Street", 
        link: "google.ca", 
        nRooms: "9"
    },
    posting: { 
        owner: "Tyler Steinkamp", 
        rent: "9001",
        email: "email",
        phone: "613-737-1111", 
        description: "hehe xd"
    },
})

test.save().then(result => {
    console.log('test successful!')
    mongoose.connection.close()
})
*/

Listing.find({}).then(res => {
  res.forEach(test => {
    console.log(test)
  })
  mongoose.connection.close()
})

/* For specifics
Posting.find({ rent: 800 }).then(result => {
	console.log('rent money')
	mongoose.connection.close()
})
*/

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

listingSchema.set('toJSON', {
  transform: (document, retObj) => {
    retObj.id = retObj._id.toString()
    delete retObj._id
    delete retObj.__v
  }
})

app.get('/api/listings', (req, res) => {
  Listing.find({}).then(listings => {
    res.json(listings)
  })
})
//listings is now assigned to an array of objects

app.listen(PORT)
console.log(`Server running on port ${PORT}`)

