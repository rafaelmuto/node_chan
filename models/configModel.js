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
        required: false
      },
      border: {
        type: String,
        required: false
      },
      text: {
        type: String,
        required: false
      },
      postOdd: {
        type: String,
        required: false
      },
      postEven: {
        type: String,
        required: false
      },
      acsent: {
        type: String,
        required: false
      }
    }
  }
});

module.exports = mongoose.model('config', configSchema);
