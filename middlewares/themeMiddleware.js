const config = require('../models/configModel');

const theme = (req, res, nxt) => {
  res.locals.pageTitle = 'ᶘ ᵒᴥᵒᶅ node_chan...';

  res.locals.theme = {
    color_background: '#fff',
    color_border: '#000',
    color_text: '#000',
    color_post_even: '#bdc3c7',
    color_post_odd: '#ecf0f1',
    color_acsent: '#e74c3c'
  };

  config
    .findOne()
    .sort('-_id')
    .then(conf => {
      if (conf !== null) {
        res.locals.pageTitle = conf.boardName;
      }
      return nxt();
    });
};

module.exports = theme;
