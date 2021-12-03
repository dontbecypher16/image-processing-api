import express from 'express'
const router = express.Router()
import imgFile from '../sharp-logic'


router.get('/', (req: express.Request, res: express.Response) => {
    const widthStr = req.query.width
    const heightStr = req.query.height
    const filename = req.query.filename
  
    let width, height
    if (widthStr) {
      width = widthStr
    }
    if (heightStr) {
      height = heightStr
    }
    res.type('image/jpeg')
    imgFile( filename, width, height).pipe(res)
    //console.log(imgFile)
  })


  export default { router }