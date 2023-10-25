export function expect<T>(expected:T) {
    return{
        toBe(result:T){
            if (result===expected) {
                console.log('Good')
            }else{ 
                throw new Error(`Fail ${result} is not equal to ${expected}`);
            }
        }
    }
}