const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  deleteCode: {
    type: String
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
    }
  }
});

module.exports = mongoose.model('Post', postSchema);
