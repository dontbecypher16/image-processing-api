/* eslint-disable prefer-const */
import express from 'express'
import imgFile  from './sharp-logic'


const app = express()
const port = 3000

app.use(express.static(__dirname + '/public/images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req: express.Request, res: express.Response): void => {
  let widthStr = req.query.width 
  let heightStr = req.query.height 
  let filename = req.query.filename
  
  let width
  let height
  if (widthStr) {
    width = widthStr 
    
  }
  if (heightStr) {
    height = heightStr 
  }
 
 
  res.type('image/jpeg')
  imgFile(filename as string, width as string, height)?.pipe(res)
  //imgFile(filename, width, height).pipe(res) 
  //console.log(imgFile)
})



app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})
