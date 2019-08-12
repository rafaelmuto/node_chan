// ᶘ ᵒᴥᵒᶅ nodechan
console.log('==> starting app.js');

// ==> importing modules:
const express = require('express');
const bodyParser = require('body-parser');

const mainRouter = require('./routes/mainRouter');

// ==> initializing express and others:
const app = express();

// ==> Middlewares:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setting up view engine
app.set('view engine', 'pug');

app.use(mainRouter);
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('==> ᶘ ᵒᴥᵒᶅ node_chan server running...');
});
