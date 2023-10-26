import { toCamelCase } from "../camelCase";
describe('Camel case converter',()=>{
    it('allow empty text',()=>{
        expect(toCamelCase('')).toBe('')
    })
    it('allow campitalized word text',()=>{
        expect(toCamelCase('Foo')).toBe('Foo')
    })
    it('Join the capitalized words that are seoarated by spaces',()=>{
        expect(toCamelCase('Foo Bar')).toBe('FooBar')
    })
    it('Join the capitalized words that are separated by spaces or hyphen',()=>{
        expect(toCamelCase('Foo-Bar_Foo')).toBe('FooBarFoo')
    })
    it('Converts the first character of one word to uppercase',()=>{
        expect(toCamelCase('foo')).toBe('Foo')
    })
    it('Converts the first character of each word to uppercase',()=>{
        expect(toCamelCase('foo bar foo')).toBe('FooBarFoo')
    })

})