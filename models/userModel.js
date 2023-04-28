const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( {

  firstName: {
    type:String,
    trim: true,
    required: true,
  },

  lastName: {
    type:String,
    trim: true,
    required: true,
  },

  email: {
    type:String,
    trim: true,
    required: true,
    lowercase: true,
  },
  phone: {
    type:String,
    match:/^[0-9]{10}$/,
    trim: true,
    required: true,
    lowercase: true,
  },
  resetPasswordLink: {
    data: String,
    default:'',
  }
},
  {timestamps: true}

);

module.exports = mongoose.model("User", userSchema);
