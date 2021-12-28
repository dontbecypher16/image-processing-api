import sharp from 'sharp'
import path from 'path'

export default function imgFile(
  filename: string,
  width: number,
  height: number
) {
  try {
    const publicPath = path.join(process.cwd(), 'public', 'images', `${filename}`)
    const newPublicPath = path.join(process.cwd(), 'public', 'new-images', `${filename}`)
    console.log(publicPath)
  
    const transform = sharp(publicPath).resize(
      width,
      height
      )
      transform.clone().toFile(newPublicPath)

    return transform
  } catch (err) {
    console.log(`An error has occurred: ${err}`)
  }
}
