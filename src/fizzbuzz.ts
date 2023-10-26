export function fizzBuzz(number: number) {
    function isDivisibleBy(divisor: number) {
        return number % divisor === 0

    }
    if (isDivisibleBy(15)) {
        return 'fizzbuzz'
    } else if (isDivisibleBy(3)) {
        return 'fizz'
    } else if (isDivisibleBy(5)) {
        return 'buzz'
    }
    return number.toString()

}