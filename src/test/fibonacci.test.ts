import { fibonacci } from "../fibonacci";
describe('The fibonacci sequence', () => {
    it(`yields value 0 to 0`, () => {
        expect(fibonacci(0)).toBe(0)
    })
    it(`yields value 1 to 1`, () => {
        expect(fibonacci(1)).toBe(1)
    })
    it('is a series where the value for a number is de addition of the preceding two values', () => {
        [2,3,4,5].forEach((n)=>expect(fibonacci(n)).toBe(fibonacci(n-1)+fibonacci(n-2)))

    })
})