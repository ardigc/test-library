export const isStrongPassword = (pass: string) => {
return hasSixCharactersOrMore(pass)&&containsNumber(pass)&& containsLowecase(pass)&&containsUppercase(pass)&&containsUnderscore(pass)
}
const containsNumber=(pass:string)=>{
    return /.*\d.*/.test(pass)
}
const containsUnderscore=(pass:string)=>{
    return pass.includes('_')
}
const containsLowecase=(pass:string)=>{
    return /.*[a-z].*./.test(pass)
}
const containsUppercase=(pass:string)=>{
    return /.*[A-Z].*./.test(pass)
}
const hasSixCharactersOrMore=(pass:string)=>{
    return pass.length >= 6
}