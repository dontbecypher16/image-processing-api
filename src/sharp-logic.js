const sharp = require("sharp");
//const router = require('express').Router()
//const fs = require("fs")




async function fjord() {
  try {
    const oldfjord = await new sharp("public/images/fjord.jpg")
      .resize({ width: 200, height: 300 })
      .toFile(`public/new-images/fjord.jpg`);

    return oldfjord
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function encenadaport() {
  try {
    const oldEncena = await new sharp("public/images/encenadaport.jpg")
      .resize({ width: 200, height: 300 })
      .toFile("public/new-images/encenadaport.jpg");

    return oldEncena
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function icelandwaterfall() {
  try {
    const oldIce = await new sharp("public/images/icelandwaterfall.jpg")
      .resize({ width: 200, height: 300 })
      .toFile("public/new-images/new-icelandwaterfall.jpg");

    return oldIce
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function palmtunnel() {
  try {
    const oldPalm = await new sharp("public/images/palmtunnel.jpg")
      .resize({ width: 200, height: 300 })
      .toFile("public/new-images/new-palmtunnel.jpg");

    return oldPalm
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

async function santamonica() {
  try {
    const oldSanta = await new sharp("public/images/santamonica.jpg")
      .resize({ width: 200, height: 300 })
      .toFile("public/new-images/new-santamonica.jpg");

    return oldSanta
  } catch (err) {
    console.log(`An error has occurred: ${err}`);
  }
}

module.exports = { fjord, encenadaport, santamonica,
   icelandwaterfall, palmtunnel }

