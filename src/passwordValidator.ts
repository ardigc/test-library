export const isStrongPassword = (pass:string) => {
if (pass.length>6) {
    return true
}
return false
}