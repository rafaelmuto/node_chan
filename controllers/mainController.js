const sharp = require('sharp');

const postModel = require('../models/postModel');

exports.getIndex = (req, res, nxt) => {
  console.log(req.ip);
  res.render('main');
};

exports.postImage = async (req, res, nxt) => {
  console.log(req.file);

  let filename = 'none';
  let originalname = 'none';

  const resize = async () => {
    const thumbPath = 'public/images/thumbnails/' + req.file.filename;

    await sharp('public/images/' + req.file.filename)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(thumbPath);
  };

  if (req.file) {
    filename = req.file.filename;
    originalname = req.file.originalname;
    await resize();
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
