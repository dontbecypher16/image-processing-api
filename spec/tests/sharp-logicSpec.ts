import imgFile from '../../src/sharp-logic'


describe("Testing image resizing", () => {
    it("gets proper data for query parameters", () => {

        const newFile = imgFile('santamonica.jpg', 400, 800)
        return newFile  
        
    });
  });