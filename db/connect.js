const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log("Connected to DB");
    return mongoose.connect(uri)
    //      {
    //     useNewUrlParse: true,
    //     useUnifiedTopology: true
    // });
};

module.exports = connectDB;