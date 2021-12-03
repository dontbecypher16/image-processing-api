const sharp = require("sharp");



module.exports = function imgFile(filename, width, height) {
  try {
    const transform = sharp(`public/images/${filename}.jpg`)
      .resize(width, height)
    transform
      .clone()
      .toFile(`public/new-images/${filename}.jpg`);

    return transform
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}


