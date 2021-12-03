//const sharp = require("sharp");
import sharp from 'sharp'



 export default function imgFile(filename: string, width: number, height: number) {
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


