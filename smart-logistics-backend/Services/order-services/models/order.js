const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

  customerId: String,

  items: Array,

  totalPrice: Number,

  status: {
    type: String,
    default: 'PENDING',
  },

});

module.exports = mongoose.model(
  'Order',
  orderSchema
);