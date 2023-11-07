import { fibonacci } from "../fibonacci";
describe('The fibonacci sequence', () => {
    it(`yields value 0 to 0`, () => {
        expect(fibonacci(0)).toBe(0)
    })
    it(`yields value 1 to 1`, () => {
        expect(fibonacci(1)).toBe(1)
    })
    it('is a series where the value for a number is de addition of the preceding two values', () => {
        expect(fibonacci(2)).toBe(fibonacci(0)+fibonacci(1))
    })
})