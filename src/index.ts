/* eslint-disable prefer-const */
import express from 'express'
import imgFile from './sharp-logic'
import apicache from 'apicache'

const app = express()
const port = 4000
let cache = apicache.middleware

app.use(express.static(__dirname + '/public/images'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cache('5 minutes'))

app.get('/', (req: express.Request, res: express.Response): void => {
  const width = Number(req.query.width)
  const height = Number(req.query.height)
  const filename = String(req.query.filename)

  try {
    res.type('image/jpeg')
    imgFile(filename, width, height)?.pipe(res)
  } catch (err) {
    res.send(`An error has occurred: ${err}`)
    console.log(`An error has occurred: ${err}`)
  }

})

app.listen(port, () => {
  console.log(`Server listening on localhost:${port}`)
})

export default app

