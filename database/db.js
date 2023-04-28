const mongoose = require("mongoose");

require('dotenv').config()

const database = mongoose.connect(
  process.env.DB_URL,
  {
     useCreateIndex: true,
     useNewUrlParser: true,
     useFindAndModify: false,
     useCreateIndex:true,
  },
  (error) => {
    if(!error) {
      console.log("connected to mongoDB")
    }else {
      console.log("connection to MongoDB failed \n" + error);

    }
  }
);

module.exports = database;
