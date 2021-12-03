import express from 'express'
const router = express.Router()

import Resizing from './resizingRoute'


router.get('/', Resizing) 

  export default { router }