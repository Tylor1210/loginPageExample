const Mongoose = require("mongoose")
const RemoteDB = `mongodb+srv://loginUser1:Tester1@cluster0.ywepnb6.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
    Mongoose.connect(RemoteDB)
    .then(client => {
        console.log("MongoDB connection successful!")
    })
}
module.exports = connectDB