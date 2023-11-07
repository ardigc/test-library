function wordWrap(text: string, columnWidht: number) {
    if (text.length <= columnWidht) {
        return text
    }
    const wrappedText = text.substring(0, columnWidht) + '\n'
    const unWrappedText = text.substring(columnWidht)
    return wrappedText.concat(wordWrap(unWrappedText, columnWidht))
}
describe('The word wrap ', () => {
    it('makes every single line of test fit column width', () => {
        expect(wordWrap('hello', 5)).toBe('hello')
        expect(wordWrap('longword', 4)).toBe('long\nword')
        expect(wordWrap('reallylongword', 4)).toBe('real\nlylo\nngwo\nrd')
    })
})