const sharp = require("sharp");

 async function fjord() {
  try {
    const oldFjord = await new sharp("public/images/fjord.jpg")
    .resize({ width: 200,
              height: 300
            })
            .toFile("new-fjord.jpg")
        
    console.log(oldFjord)
      

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}


async function encenadaport() {
  try {
    const oldEncena = await new sharp("public/images/encenadaport.jpg")
    .resize({ width: 200,
              height: 300
            })
            .toFile("new-encenadaport.jpg")
        
    console.log(oldEncena)
      

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function icelandwaterfall() {
  try {
    const oldIce = await new sharp("public/images/icelandwaterfall.jpg")
    .resize({ width: 200,
              height: 300
            })
            .toFile("new-icelandwaterfall.jpg")
        
    console.log(oldIce)
      

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function palmtunnel() {
  try {
    const oldPalm = await new sharp("public/images/palmtunnel.jpg")
    .resize({ width: 200,
              height: 300
            })
            .toFile("new-palmtunnel.jpg")
        
    console.log(oldPalm)
      

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function santamonica() {
  try {
    const oldSanta = await new sharp("public/images/santamonica.jpg")
    .resize({ width: 200,
              height: 300
            })
            .toFile("new-santamonica.jpg")
        
    console.log(oldSanta)
      

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

module.exports = fjord()
module.exports = encenadaport()
module.exports = icelandwaterfall()
module.exports = palmtunnel()
module.exports = santamonica()