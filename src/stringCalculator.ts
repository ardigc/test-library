export const subNumbers = (expression: string) => {
    if (!expression) return 0
    if(expression.startsWith('//')){
        const separator =expression.slice('//'.length, expression.lastIndexOf('/'))
        const tokens = expression.slice(expression.lastIndexOf('/')+1).split(separator)
        let total = tokens.reduce((acc, cur) => { return acc + getNumber(cur) }, 0)
        return total
    }
    const tokens = expression.split(',')
    let total = tokens.reduce((acc, cur) => { return acc + getNumber(cur) }, 0)
    return total
}
const getNumber = (expression: string) => {
    return (isNaN(Number(expression)) ? 0 : Number(expression))
}