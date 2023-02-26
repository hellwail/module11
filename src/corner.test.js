import {getDay} from "./getDay.js" ;

describe('tests for getDay function', () =>{
    it("should operate correctly with number from 1 to 7", () => {
        expect(getDay(2)).toBe('Friday')
    })
})
