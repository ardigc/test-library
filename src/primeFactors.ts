export function getPrimesFactor(number: number) {
    if(number<1) throw new Error("Only positive number are allowed");
    
    let prime = findSmaller(number)
    const remainder = number / prime
    return remainder <= 1 ? [prime] : [prime].concat(getPrimesFactor(remainder))
}
function findSmaller(number: number) {
    if(number===1) return 1
    let factor = 2
    while (number % factor != 0) {
        ++factor
    }
    return factor
}