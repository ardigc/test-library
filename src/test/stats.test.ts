import { average, sum } from "../stats";

describe("Stats should", () => {
  it("calculate sum", () => {
    const result = sum([1, 2, 3]);
    const expected = 6;
    expect(expected).toBe(result);
  });

  it("Calculate average", () => {
    const result = average([1, 2, 3]);
    const expected = 2;
    expect(expected).toBe(result);
  });
});
