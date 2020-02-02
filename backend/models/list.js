//importing this module: const List = require('./models/list')

const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

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

listingSchema.set('toJSON', {
  transform: (document, retObj) => {
    retObj.id = retObj._id.toString()
    delete retObj._id
    delete retObj.__v
  }
})

module.exports = mongoose.model('List', listingSchema)


