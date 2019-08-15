const sharp = require('sharp');

const resize = async (req, res, nxt) => {
  const orignalFile = 'public/images/' + req.file.filename;
  const thumbPath = 'public/images/thumbnails/' + req.file.filename;

  if (req.file) {
    await sharp(orignalFile)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(thumbPath);
  }

  return nxt();
};

module.exports = resize;
