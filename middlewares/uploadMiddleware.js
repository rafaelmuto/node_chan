const multer = require('multer');
const uuidv1 = require('uuid/v1');

// config multer storage and fileFilter:
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const originalnameArr = file.originalname.split('.');
    const ext = originalnameArr[originalnameArr.length - 1];

    cb(null, uuidv1() + '.' + ext);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter
});

module.exports = upload;
