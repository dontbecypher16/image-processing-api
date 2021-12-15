import sharp from 'sharp'
import path from 'path'

export default function imgFile(
  filename: string,
  width: number,
  height: number
) {
  try {
    const publicPath = path.join(process.cwd(), 'public')
  
    const transform = sharp(`${publicPath}/images/${filename}`).resize(
      width,
      height
      )
      transform.clone().toFile(`${publicPath}/new-images/${filename}`)

    return transform
  } catch (err) {
    console.log(`An error has occurred: ${err}`)
  }
}
