const mongoose = require('mongoose');

const TourSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Tour', TourSchema);
