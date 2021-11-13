const sharp = require("sharp");
const fs = require("fs")



module.exports = async function imgFile(path, filename, width, height) {
  try {

    path =  `/public/images/${filename}`
   const readStream = fs.createReadStream(path)
   let transform =  sharp()
 
   if (filename && (width || height)) {
     transform = await transform.resize(width, height).toFile(`/public/new-images/${filename}`)
   }
 
   //console.log(transform)
   return readStream.pipe(transform)

  } catch(err){

    console.log(err)

  }
}


// async function fjord() {
//   try {
//     const oldfjord = await new sharp("public/images/fjord.jpg")
//       .resize({ width: 200, height: 300 })
//       .toFile(`public/new-images/new-fjord.jpg`);

//     return oldfjord
//   } catch (err) {
//     console.log(`An error has occurred: ${err}`);
//   }
// }

// async function encenadaport() {
//   try {
//     const oldEncena = await new sharp("public/images/encenadaport.jpg")
//       .resize({ width: 200, height: 300 })
//       .toFile("public/new-images/new-encenadaport.jpg");

//     return oldEncena
//   } catch (err) {
//     console.log(`An error has occurred: ${err}`);
//   }
// }

// async function icelandwaterfall() {
//   try {
//     const oldIce = await new sharp("public/images/icelandwaterfall.jpg")
//       .resize({ width: 200, height: 300 })
//       .toFile("public/new-images/new-icelandwaterfall.jpg");

//     return oldIce
//   } catch (err) {
//     console.log(`An error has occurred: ${err}`);
//   }
// }

// async function palmtunnel() {
//   try {
//     const oldPalm = await new sharp("public/images/palmtunnel.jpg")
//       .resize({ width: 200, height: 300 })
//       .toFile("public/new-images/new-palmtunnel.jpg");

//     return oldPalm
//   } catch (err) {
//     console.log(`An error has occurred: ${err}`);
//   }
// }

// async function santamonica() {
//   try {
//     const oldSanta = await new sharp("public/images/santamonica.jpg")
//       .resize({ width: 200, height: 300 })
//       .toFile("public/new-images/new-santamonica.jpg");

//     return oldSanta
//   } catch (err) {
//     console.log(`An error has occurred: ${err}`);
//   }
// }

// // module.exports = { fjord, encenadaport, santamonica,
// //    icelandwaterfall, palmtunnel }

//    module.exports = fjord()
//    module.exports = encenadaport()
//    module.exports = santamonica()
//    module.exports = icelandwaterfall()
//    module.exports = palmtunnel()


