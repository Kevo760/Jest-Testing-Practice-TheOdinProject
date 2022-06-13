
import { add, subtract, divide, multiply } from "./calculator";


test('Add Example 1', () => {
    expect(add(1,2)).toBe(3);
});


test('Add Example 2', () => {
    expect(add(5,5)).toBe(10);
});


test('Subtact Example 1', () => {
    expect(subtract(1,1)).toBe(0);
});


test('Subtract Example 2', () => {
    expect(subtract(10,1)).toBe(9);
});


test('Divide Example 1', () => {
    expect(divide(6,3)).toBe(2)
});

test('Divide Example 2', () => {
    expect(divide(20,4)).toBe(5)
});


test('Multiply Example 1', () => {
    expect(multiply(6,3)).toBe(18)
});

test('Multiply Example 2', () => {
    expect(multiply(10,2)).toBe(20)
});
