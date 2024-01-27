// Create a Mongoose schema
const mongoose = require('mongoose')
const monthlySchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
    },
    name: String,
    amount: Number,
  });
  
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: String,
      tel: {
        type: String,
        required: true,
      },
      balance:Number,
      category: String,
      company: String,
      projectDate: String, // Assuming this is a date string, adjust as needed
      message: String,
      monthlyData: [monthlySchema],
      domainName: String,
      type: {
        type: String,
        required: true,
      },
      planData: {
        instanceType: String,
        ram: String,
        cpu: String,
        price: String,
      },
      fremeworok: String,
      database: String,
      hosting: String,
    completed:{
        type:Boolean
    },
    status:{
        type:String,
        default:'Pending'
    }
});

// Create a Mongoose model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact
