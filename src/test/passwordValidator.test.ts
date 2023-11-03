import { isStrongPassword } from "../passwordValidator";
describe('The password strength validator', () => {
    it('considers a password to be strong when all requirements are met', () => {
        expect(isStrongPassword('1234abcdABCD_')).toBe(true)
    })
})