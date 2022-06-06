const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
  
  },
  lastName:{
    type: String,

  },
  userName:{
    type: String,
  
  },
  email: {
    type: String,
  
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);