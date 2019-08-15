const postModel = require('../models/postModel');

exports.getIndex = (req, res, nxt) => {
  postModel
    .find()
    .then(posts => {
      console.log(posts);
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

exports.postImage = async (req, res, nxt) => {
  console.log(req.file);

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
    return res.redirect('/');
  });
};
