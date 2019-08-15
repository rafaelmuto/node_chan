const express = require('express');

const mainController = require('../controllers/mainController');
const upload = require('../middlewares/uploadMiddleware');
const resize = require('../middlewares/resizeMiddleware');

const router = express.Router();

router.get('/', mainController.getIndex);

router.post('/upload', upload.single('postImage'), mainController.postImage);

module.exports = router;
