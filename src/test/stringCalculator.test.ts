import { subNumbers } from "../stringCalculator";
describe('The string calculator', () => {
    it('should not increment the total in case of null or empty expresion', () => {
        expect(subNumbers(null)).toBe(0)
        expect(subNumbers('')).toBe(0)
    })
    it('should coverts numbers in string to numbers type', () => {
        expect(subNumbers('10')).toBe(10)
    })
    it('should sums all numbers separated by commas', () => {
        expect(subNumbers('1,2')).toBe(3)
        expect(subNumbers('1,2,3')).toBe(6)
    })
    it('does not increment the total in case of no numeric symbols', () => {
        expect(subNumbers('a')).toBe(0)
        expect(subNumbers('a,1')).toBe(1)
        expect(subNumbers('2,a,1')).toBe(3)
    })
    it('should sums all the numbers separated by custom separator', () => {
        expect(subNumbers('//#/3#2')).toBe(5)
        expect(subNumbers('//#/3,2')).toBe(0)
        expect(subNumbers('//%/3%2%6')).toBe(11)

    })
})
