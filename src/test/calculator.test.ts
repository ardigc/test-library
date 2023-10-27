import * as arithmetic from "../Arithmetic";
import * as calculator from "../calculate";
jest.mock('../Arithmetic')
describe('The calculator', () => {
    // (arithmetic as any).add = jest.fn(arithmetic.add);
    // (arithmetic as any).subtract = jest.fn(arithmetic.subtract);
    it('calls arithmetic add', () => {
      const result=  calculator.doAdd(1, 2)
        expect(arithmetic.add).toHaveBeenCalledWith(1, 2)
        // expect(result).toBe(3)
    })
    it('calls arithmetic subtract', () => {
        const result= calculator.doSubtract(1, 2)
        expect(arithmetic.subtract).toHaveBeenCalledWith(1, 2)
        // expect(result).toBe(-1)
    })
})