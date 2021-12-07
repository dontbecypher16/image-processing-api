import imgFile from '../sharp-logic'

describe("Testing image resizing", () => {
    it("gets proper data from endpoint",  () => {

        const data = imgFile
        expect(data).toEqual({
          filename: 'palmtunnel',
          width: 500,
          height: 700,
        })

        //expect(1).toBe(1)
        
    })
  })