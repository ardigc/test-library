import { average, sum } from "./stats";
import { expect } from "./testLib";
let result, expected
 result = sum([1, 2 , 3])
 expected = 6
 expect(expected).toBe(result)
 
 result = average([1, 2 , 3])
 expected = 2
 expect(expected).toBe(result)
