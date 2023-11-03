export const isStrongPassword = (pass: string) => {
return hasSixCharactersOrMore(pass)&&containsNumber(pass)&& /.*[a-z].*./.test(pass)
}
const containsNumber=(pass:string)=>{
    return /.*\d.*/.test(pass)
}
const hasSixCharactersOrMore=(pass:string)=>{
    return pass.length >= 6
}