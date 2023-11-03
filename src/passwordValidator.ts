export const isStrongPassword = (pass: string) => {
return hasSixCharactersOrMore(pass)&&containsNumber(pass)&& containsLowecase(pass)
}
const containsNumber=(pass:string)=>{
    return /.*\d.*/.test(pass)
}
const containsLowecase=(pass:string)=>{
    return /.*[a-z].*./.test(pass)
}
const hasSixCharactersOrMore=(pass:string)=>{
    return pass.length >= 6
}