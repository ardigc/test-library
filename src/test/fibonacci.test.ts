import { fibonacci } from "../fibonacci";
describe('The fibonacci sequence',()=>{
    it(`yields value 0 to 0`,()=>{
expect(fibonacci(0)).toBe(0)
    })
})