// ᶘ ᵒᴥᵒᶅ nodechan

// (੭ ᐕ)੭*⁾⁾

// ==> importing modules:
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const mainRouter = require('./routes/mainRouter');
const errController = require('./controllers/errController');
const theme = require('./middlewares/themeMiddleware');

// ==> initializing express and others:
const app = express();
const accessLogStream = fs.createWriteStream('acess.log', { flags: 'a' });

// ==> Middlewares:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: accessLogStream }));

// ==> setting up view engine
app.set('view engine', 'pug');

app.use(mainRouter);
app.use(express.static('public'));
app.use(errController.err404);
app.use(errController.err500);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(con => {
  console.log('==> mogoose connected!');
  console.log('==> ᶘ ᵒᴥᵒᶅ node_chan server starting @ port:', process.env.PORT);
  app.listen(process.env.PORT || 3000);
});
