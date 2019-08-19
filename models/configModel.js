const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true
  },
  theme: {
    colors: {
      background: {
        type: String,
        required: true
      },
      border: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      postOdd: {
        type: String,
        required: true
      },
      postEven: {
        type: String,
        required: true
      },
      acsent: {
        type: String,
        required: true
      }
    }
  }
});

module.exports = mongoose.model('config', configSchema);
