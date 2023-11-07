import { getPrimesFactor } from "../primeFactors";

describe('The prime factors', () => {
    it('knows that the first prime number is 1', () => {
        expect(getPrimesFactor(1)).toEqual([1])
    })
    it('knows what is  a prime number', () => {
        expect(getPrimesFactor(2)).toEqual([2])
        expect(getPrimesFactor(3)).toEqual([3])
    })
    it('should the same result to multiply the numbers in the output list', () => {
        expect(getPrimesFactor(2 * 2 * 2)).toEqual([2, 2, 2])
    })
    it('orders the prime factors from the smallest to the biggest', () => {
        expect(getPrimesFactor(5 * 7 * 11 * 3)).toEqual([3, 5, 7, 11])
    })
})