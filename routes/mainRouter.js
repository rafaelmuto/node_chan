const express = require('express');

const mainController = require('../controllers/mainController');
const upload = require('../middlewares/uploadMiddleware');
const resize = require('../middlewares/resizeMiddleware');
const theme = require('../middlewares/themeMiddleware');

const router = express.Router();

router.get('/', theme, mainController.getIndex);

router.post('/upload', upload.single('postImage'), resize, mainController.postPost);

router.get('/config', theme, mainController.getConfig);

router.post('/config', mainController.postConfig);

module.exports = router;
