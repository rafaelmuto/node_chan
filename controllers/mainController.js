const postModel = require('../models/postModel');
const config = require('../models/configModel');

exports.getIndex = (req, res, nxt) => {
  postModel
    .find()
    .sort('-date')
    .then(posts => {
      return res.render('main', {
        posts: posts
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.statusCode = 500;
      return nxt(error);
    });
};

exports.postPost = async (req, res, nxt) => {
  let filename = 'none';
  let originalname = 'none';

  if (req.file) {
    filename = req.file.filename;
    originalname = req.file.originalname;
  }

  const newPost = new postModel({
    username: req.body.userName,
    email: req.body.email,
    deleteCode: req.body.deleteCode,
    ip: req.ip,
    message: req.body.postMessage,
    image: {
      originalName: originalname,
      fileName: filename
    }
  });

  newPost
    .save()
    .then(result => {
      console.log('-> post added:', newPost._id);
      return res.redirect('/');
    })
    .catch(err => {
      const error = new Error(err);
      error.statusCode = 500;
      return nxt(error);
    });
};

exports.getConfig = (req, res, nxt) => {
  res.render('config', {
    pageTitle: 'node_chan config'
  });
};

exports.postConfig = (req, res, nxt) => {
  // why is it not deleteing???
  config.findOneAndRemove();

  new config({
    boardName: req.body.boardName
  })
    .save()
    .then(result => {
      return res.redirect('/');
    })
    .catch(err => {
      const error = new Error(err);
      error.statusCode = 500;
      return nxt(error);
    });
};
