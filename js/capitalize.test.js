import { capitilizeFirstLetter } from "./capitilize";

test('Capitilize first letter', () => {
    expect(capitilizeFirstLetter('anime')).toBe('Anime');
});

test('Capitilize first letter 2', () => {
expect(capitilizeFirstLetter('SLAYER')).toBe('Slayer')
});

