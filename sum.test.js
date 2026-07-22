import sum from "./sum.js";

test("add 2 + 2 to equa 4",()=>{
    expect(sum(2,2)).toBe(4);
});

test("add -2 + -2 to equa -4",()=>{
    expect(sum(-2,-2)).toBe(-4);
});

