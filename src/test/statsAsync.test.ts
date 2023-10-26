import * as statsAsync from "../statsAsync";

describe("Stats Async should", () => {
    it.only("calculate (async) sum", async () => {
      const result = await statsAsync.sum([1, 2, 3]);
      const expected = 6;
      expect(expected).toBe(result);
    });
  
    it("Calculate (async) average", async () => {
      const result = await statsAsync.average([1, 2, 3]);
      const expected = 2;
      expect(expected).toBe(result);
    });
  });
  