const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const List = require('./models/list')
const PORT = process.env.PORT

if ( process.argv.length < 3) {
    console.log('give a password as argument')
}

const password = process.argv[2]

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
    id: Number,
    date: Date,
    posn: {
        lat: Number,
        lng: Number,
    },
    window: {
        address: String,
        link: String,
        nRooms: Number,
    },
    posting: {
        owner: String,
        rent: Number,
        email: String,
        Number: String,
        Description: String,
    }
})

const Posting = mongoose.model('Posting', listingSchema)

const test = new Posting({
    id: 1,
    date: new Date(),
    posn: { 
        lat: 45.506840,
        lng: -73.573308 },
    window: { 
        address: "3423 Aylmer Street", 
        link: "google.ca", 
        nRooms: 4
    },
    posting: { 
        owner: "Roger", 
        rent: 800,
        email: "email",
        number: "62345234532", 
        description: "HAHAHA"
    },
})

/*
test.save().then(result => {
    console.log('test successful!')
    mongoose.connection.close()
})
*/

Posting.find({}).then(res => {
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
    Posting.find({}).then(listings => {
    	res.json(listings.map(list => list.toJSON()))
    });
});
//listings is now assigned to an array of objects

app.listen(PORT)
console.log(`Server running on port ${PORT}`)






