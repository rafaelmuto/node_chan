const postModel = require('../models/postModel');

exports.getIndex = (req, res, nxt) => {
  console.log(req.ip);
  res.render('main');
};

exports.postImage = (req, res, nxt) => {
  let filename = 'none';
  let originalname = 'none';

  if (req.file) {
    filename = req.file.filename;
    originalname = req.file.originalname;
  }

  const newPost = new postModel({
    username: req.body.userName,
    ip: req.ip,
    message: req.body.postMessage,
    image: {
      originalName: originalname,
      fileName: filename,
      thumbnail: 'none'
    }
  });

  newPost.save().then(result => {
    console.log('-> post added:', newPost._id);
    res.redirect('/');
  });
};
