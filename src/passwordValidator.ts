export const isStrongPassword = (pass: string) => {
    if (pass.length >= 6 && /.*\d.*/.test(pass)) {
        return true
    }
    return false
}