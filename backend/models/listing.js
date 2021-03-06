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
    posn: {
        lat: String,
        lng: String,
    },
    window: {
        address: String,
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

listingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Listing', listingSchema)