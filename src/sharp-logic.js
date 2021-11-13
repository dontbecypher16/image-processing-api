const sharp = require("sharp");



module.exports = async function imgFile(filename, width, height) {
  try {
    const transform = await sharp(`public/images/${filename}.jpg`)
      .resize(width, height)
      .toFile(`public/new-images/${filename}.jpg`);

    return transform
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}


