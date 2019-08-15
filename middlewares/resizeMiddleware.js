const sharp = require('sharp');

const resize = (req, res, nxt) => {
  console.log(__dirname, req.file);
  const thumbPath = '../public/images/thumbnails/' + req.file.filename;

  sharp(req.file.buffer)
    .resize(300, 300, {
      fit: sharp.fit.inside,
      withoutEnlargement: true
    })
    .toFile(thumbPath);

  nxt();
};

module.exports = resize;
