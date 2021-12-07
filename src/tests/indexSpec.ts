import app from '../index'
import supertest from 'supertest'
//import imgFile from '../sharp-logic';


const request = supertest(app)



describe("Testing endpoint...", () => {
    
    it("gets proper data from endpoint", async () => {

        // const response = await request.get(`/${filename}&${width}`)
        // expect(response.status).toBe(200)
       
        await request
        .get('/')
        .query({ filename: 'palmtunnel.jpg',
                width: 500,
                height: 700 })
        .expect(200)
          
     
    })

  });
  
  