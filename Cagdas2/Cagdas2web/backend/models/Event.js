const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String
});

// Event modelini oluşturuyoruz
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;