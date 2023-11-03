import { isStrongPassword } from "../passwordValidator";
describe('The password strength validator', () => {
    it('considers a password to be strong when all requirements are met', () => {
        expect(isStrongPassword('1234abcdABCD_')).toBe(true)
    })
    it('fails when password is too short', () => {
        expect(isStrongPassword('1aA_')).toBe(false)
    })
    it('fails when password is missing a number', () => {
        expect(isStrongPassword('abcdABCD_')).toBe(false)
    })
    it('fails when password is missing a lowercase', () => {
        expect(isStrongPassword('1234ABCD_')).toBe(false)
    })

})