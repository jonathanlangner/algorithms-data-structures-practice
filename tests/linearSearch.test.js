import {linearSearch} from "../modules/algorithms/linearSearch";
import {bigArr, primesForBinSearch} from "../modules/data-structures/arrays";

const primes = [...primesForBinSearch];

test('checks to see if 12 exists in the prime list. expected result false', () => {
    expect(linearSearch(primes,12)).toBe(false);
});


test('checks to see if 97 exists in the prime list. expected result true', () => {
    expect(linearSearch(primes, 97)).toBe(true);
});
