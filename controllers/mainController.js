const postModel = require('../models/postModel');

exports.getIndex = (req, res, nxt) => {
  console.log(req.ip);
  res.render('main');
};

exports.postImage = (req, res, nxt) => {
  const newPost = new postModel({
    username: req.body.userName,
    message: req.body.postMessage,
    image: {
      originalName: req.file.originalname,
      fileName: req.file.filename,
      thumbnail: 'none'
    }
  });

  newPost.save().then(result => {
    console.log('-> post added:', newPost._id);
    res.redirect('/');
  });
};
