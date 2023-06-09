const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('DB Connected successfully!')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()
  }
}

module.exports = connectDB
