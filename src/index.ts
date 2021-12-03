/* eslint-disable prefer-const */
import express from 'express'
import imgFile  from './sharp-logic'


const app = express()
const port = 3000

app.use(express.static(__dirname + '/public/images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.get('/', (req: express.Request, res: express.Response): void => {
  const width = Number(req.query.width)
  const height= Number(req.query.height)
  const filename = req.query.filename
 
 
  res.type('image/jpeg')
  imgFile(filename as string, width, height)?.pipe(res)
  //imgFile(filename, width, height).pipe(res) 
  //console.log(imgFile)
})



app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})
