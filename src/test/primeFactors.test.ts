import { getPrimesFactor } from "../primeFactors";
/*
2 -> [2]
2 * 2 -> [2,2]
2 * 2 * 2 -> [2,2,2]
3 -> [3]
3 * 3 -> [3,3]
3 * 2 -> [2,3]
5 * 5 -> [5,5]
5 * 7 * 11 * 3 -> [3,5,7,11]
*/
describe('The prime factors',()=>{
    it('finds the prime comopsition of the given number',()=>{
        expect(getPrimesFactor(2)).toEqual([2])
        expect(getPrimesFactor(2*2)).toEqual([2,2])
        expect(getPrimesFactor(2*2*2)).toEqual([2,2,2])
        expect(getPrimesFactor(3)).toEqual([3])
        expect(getPrimesFactor(2*3)).toEqual([2,3])
        expect(getPrimesFactor(3*3)).toEqual([3,3])
        expect(getPrimesFactor(5*5)).toEqual([5,5])
        expect(getPrimesFactor(5 * 7 * 11 * 3)).toEqual([3,5,7,11])
    })
})