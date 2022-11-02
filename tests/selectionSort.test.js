import {bigArr, primesForBinSearch} from "./arrays.js";
import {checkSortResult} from "./checkSortResult.js";
import {selectionSort} from "./selectionSort.js";

//Cloning the arrays using the spread operator so as to not change the original array.
const unsortedArr = [...bigArr];
const sortedArr = selectionSort([...bigArr]);

test('checks to see if the primes array is sorted. expected result true', () => {
  expect(checkSortResult(primesForBinSearch)).toBe(true);
});

test('checks to see if the unsorted array is sorted. expected result false', () => {
    expect(checkSortResult(unsortedArr)).toBe(false);
});


test('checks to see if the sorted array is sorted. expected result true', () => {
    expect(checkSortResult(sortedArr)).toBe(true);
});
