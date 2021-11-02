const sharp = require("sharp");

async function testing() {
  try {
    const data = await sharp("images/fjord.jpg")
    .withMetadata()
    .resize({ width: 2000 })
      
    console.log(data.options.input.file)
    const {newNew} = data.options.input.file
    return newNew
    

  } 
  catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

module.exports = testing();
