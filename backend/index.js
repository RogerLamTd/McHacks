const express = require('express')
const app = express()
const mongoose = require('mongoose')

if ( process.argv.length < 3) {
    console.log('give a password as argument')
}

const password = process.argv[2]

const url = 
    `mongodb+srv://mchacks:${password}@listings-awwxv.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

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

test.save().then(result => {
    console.log('test succesful!')
    mongoose.connection.close()
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/listings', (req, res) => {
    res.json(listings)
})

const PORT = 3001
app.listen(PORT)
console.log('Server running on port ${PORT}')