const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    default: 'annon'
  },
  ip: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  message: {
    type: String
  },
  image: {
    originalName: {
      type: String
    },
    fileName: {
      type: String
    },
    thumbnail: {
      type: String
    }
  }
});

module.exports = mongoose.model('Post', postSchema);
