
import { fizzBuzz } from "../fizzbuzz";
describe('FizzBuzz',()=>{
    it('Return one as a string for number one',()=>{
        expect(fizzBuzz(1)).toBe('1')
    })
    it('Return two as a string for number two',()=>{
        expect(fizzBuzz(2)).toBe('2')
    })
    it('Return fizz as a string for number three',()=>{
        expect(fizzBuzz(3)).toBe('fizz')
    })
    it('Return buzz as a string for number five',()=>{
        expect(fizzBuzz(5)).toBe('buzz')
    })
    it('Return fizzbuzz as a string for number fifteen',()=>{
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })
    it('Return fizz as a string for any number divisible by three',()=>{
        expect(fizzBuzz(6)).toBe('fizz')
    })
    it('Return buzz as a string for any number divisible by five',()=>{
        expect(fizzBuzz(10)).toBe('buzz')
    })
    it('Return fizzbuzz as a string for any number divisible by fifteen',()=>{
        expect(fizzBuzz(30)).toBe('fizzbuzz')
    })
    it('Return one as a string for any number is no divisible by thee or five',()=>{
        expect(fizzBuzz(17)).toBe('17')
    })
})