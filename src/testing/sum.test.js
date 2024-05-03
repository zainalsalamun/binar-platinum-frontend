const sum = require('./sum');
test ('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})



// Test for negative numbers
test('subtracts 4 - 2 to equal 2', () => {
    expect(sum(-4,-2)).toBe(-6);
});

// Test for zero
test('adds 0 + 0 to equal 0', () => {
    expect(sum(0,0)).toBe(0);
});

// Test for different data types
test('concatenates string "5" and number 3 to equal "53"', () => {
    expect(sum('5',3)).toBe('53');
});


test('negasi syntax not.toBe', () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(sum(1,2)).not.toBe(-3);
        }
    }
});

test ('null', () => {
    const n = null
    expect(sum(n)).not.toBeNull();
    expect(sum(n)).toBeNull();
    expect(sum(n)).toBeTruthy();
    expect(sum(n)).toBeFalsy();
    expect(sum(n)).toBeDefined();
    expect(sum(n)).not.toBeUndefined();
});


test ('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
});


const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',

];

test('list should include milk', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
    
})
