import app from '../index'
import supertest from 'supertest'

const request = supertest(app)

describe("Testing endpoint...", () => {
    it("gets proper data from endpoint", async(done) => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
        done()
    });
  });
  
  