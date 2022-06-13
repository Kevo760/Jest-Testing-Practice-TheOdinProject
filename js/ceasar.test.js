import { ceasar } from "./caesar";

test('Test cesarciper example 1', () => {
   expect(ceasar('yolo', 1)).toBe('zpmp'); 
});


test('Test cesarciper example 2', () => {
    expect(ceasar('lmfao', 5)).toBe('qrkft'); 
 });

 test('Test cesarciper example 3', () => {
    expect(ceasar('win', 2)).toBe('ykp'); 
 });


 test('Test cesarciper example 4', () => {
   expect(ceasar('WIN', 2)).toBe('YKP'); 
});

test('Test cesarciper example 5', () => {
   expect(ceasar('LOL', -4)).toBe('HKH'); 
});

test('Test cesarciper example 6', () => {
   expect(ceasar('123', 0)).toBe('123'); 
});