import {getDay} from "./getDay.js" ;

describe('tests for getDay function', () =>{
    const first = 1;
    const firstDay = 'Monday'
    it("should operate correctly with number from 1 to 7", () => {
        expect(getDay(2)).toBe('Tuesday');
    }),
    it("should operate correctly with number from 1 to 7", () => {
        expect(getDay('monday')).toBe('неизвестно');
    }),
    it("should operate correctly with number from 1 to 7", () => {
        expect(getDay(14)).toBe('неизвестно');
    })
    it("should operate correctly with number from 1 to 7", () => {
        expect(getDay(first)).toBe(`${firstDay}`);
    })
})

