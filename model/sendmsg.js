// Create a Mongoose schema
const mongoose = require('mongoose')

  
const sendSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
      },
      email: String,
      phone: {
        type: String,
        required: true,
      },
      message: String,
});

// Create a Mongoose model
const sendmsg = mongoose.model('sendmsg', sendSchema);

module.exports = sendmsg
