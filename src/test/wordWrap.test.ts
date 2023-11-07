function wordWrap(text: string, columnWidht:number) {
return undefined
}
describe('The word wrap ',()=>{
  it('makes every single line of test fit column width',()=>{
    expect(wordWrap('hello', 5)).toBe('hello')
  })  
})