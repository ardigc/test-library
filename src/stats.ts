export function sum(numbers:number[]):number{
    return numbers.reduce((prev:number, current:number)=>prev+current)
}
export function average(numbers:number[]) {
    return sum(numbers)/numbers.length
}