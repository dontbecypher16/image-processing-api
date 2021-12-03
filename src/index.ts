import express from 'express'
import images from './routes/index'
//import imgFile from './sharp-logic'

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public/images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(images)


// app.get('/', (req: express.Request, res: express.Response) => {
//   const widthStr = req.query.width
//   const heightStr = req.query.height
//   const filename = req.query.filename

//   let width, height
//   if (widthStr) {
//     width = widthStr
//   }
//   if (heightStr) {
//     height = heightStr
//   }
//   res.type('image/jpeg')
//   imgFile( filename, width, height).pipe(res) 
//   //console.log(imgFile)
// })



app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})
