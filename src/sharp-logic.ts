import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

export default function imgFile(
  filename: string,
  width: number,
  height: number
  ) {
    
    let publicPath 
    if(!isNaN(width) && !isNaN(height)){
      publicPath = path.join(process.cwd(), 'public')
      
  }
  
    const transform = sharp(`${publicPath}/images/${filename}`).resize(
      width,
      height
      )

      if(fs.existsSync(`${publicPath}/new-images/`)){
        transform.clone().toFile(`${publicPath}/new-images/${filename}`)

      }else{
        fs.mkdirSync(`${publicPath}/new-images/`)
        transform.clone().toFile(`${publicPath}/new-images/${filename}`)

      }

    return transform
 
}
