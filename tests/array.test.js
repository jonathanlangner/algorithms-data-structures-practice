import {bigArr, primesForBinSearch, charArr, multiDimensionalArr, matrix, mazeOne} from "./arrays";


test("checks to see if the bigArr exists. result equals true", () => {
    expect(bigArr != undefined || null).toBe(true);
});

test("checks to see if the array primesForBinSearch exists. result equals true", () => {
    expect(primesForBinSearch != undefined || null).toBe(true);
});

test("checks to see if charArr exists. result equals true", () => {
    expect(charArr != undefined || null).toBe(true);
});

test("checks to see if multiDimensionalArr exists. result equals true", () => {
    expect(multiDimensionalArr != undefined || null).toBe(true);
});

test("checks to see if matrix exists. result equals true", () => {
    expect(matrix != undefined || null).toBe(true);
});

test("checks to see if mazeOne exists. result equals true", () => {
    expect(mazeOne != undefined || null).toBe(true);
});
