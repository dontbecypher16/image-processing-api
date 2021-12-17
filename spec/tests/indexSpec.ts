import app from '../../src/index'
import supertest from 'supertest'

const request = supertest(app)

describe('Testing endpoint...', () => {
  it('gets proper data from endpoint', () => {
 
    return request
      .get('/')
      .query({ filename: 'santamonica.jpg'})
      .expect(200)
   
  })
})
