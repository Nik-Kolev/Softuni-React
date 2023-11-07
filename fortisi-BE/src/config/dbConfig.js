const mongoose = require('mongoose')
const { dbConnection } = require('./config')

module.exports = async function mongooseConfig() {
    try {
        await mongoose.connect(dbConnection)
        console.log('DB is connected successfully!')
    } catch (err) {
        console.log(err)
    }

}
