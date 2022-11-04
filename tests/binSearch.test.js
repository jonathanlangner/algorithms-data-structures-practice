import {bigArr, primesForBinSearch} from "../modules/data-structures/arrays";
import {binarySearch} from "../modules/algorithms/binarySearch";
import {bubbleSort} from "../modules/algorithms/bubbleSort";

//Binary Search Must be preformed on a sorted array.
const unsortedArr = [...bigArr];
const sortedArr = bubbleSort([...bigArr]);

test("searches the primes array 12. result equals false", () => {
    expect(binarySearch(sortedArr, 12)).toBe(true);
});

test("searches the primes array 97. result equals true", () => {
    expect(binarySearch(sortedArr, 970)).toBe(false);
});
