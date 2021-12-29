import app from '../../src/index'
import supertest from 'supertest'

const request = supertest(app)

describe('Testing endpoint...', () => {
  it('gets proper data from endpoint', () => {
 
    return request
      .get('/')
      .query({ filename: 'santamonica.jpg', width: 500, height: 700})
      .expect(200)
   
  })
})
