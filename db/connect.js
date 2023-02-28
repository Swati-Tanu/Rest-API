const mongoose = require('mongoose');

const uri = "mongodb+srv://tanu:tanu@cluster0.swdpmtl.mongodb.net/RestAPI?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("Connected to DB");
    return mongoose.connect(uri)
    //      {
    //     useNewUrlParse: true,
    //     useUnifiedTopology: true
    // });
};

module.exports = connectDB;