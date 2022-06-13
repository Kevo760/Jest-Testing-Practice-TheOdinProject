
import { analyzeArray } from "./analyzeArray";

test('analyzeArray test 1', () => {
    expect(analyzeArray(4,1,8,6)).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        })
});