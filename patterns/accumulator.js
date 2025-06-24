/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if(typeof n !== 'number') {
    return NaN
  } else if(n < 0) {
    return undefined
  } else if(n === 0) {
    return 1
  } else {
    return (n * factorial(n - 1));
  }
  
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  let array = [];
  if(typeof n !== 'number') {
    return null
  } else if(n <= 0) {
    array = [];
    return array;
  } else {
    for (let i = 1; i <= n; i++) {
      array.push(i);
    }
    return array;
  }
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  if(strings.length === 0) {
    return ''
  } else {
    let longestString = "";
    for (const string of strings) {
      if (string.length > longestString.length) {
        longestString = string;
      }
    }
    return longestString;
  }
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  if(attendance.length === 0) {
    return 0;
  } else {
    let present = 0;
    for(const student of attendance) {
      if(student === true) {
        present = present + 1;
      }
    }
    return present;
  }
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if(typeof dna !== 'string') {
    return null;
  } else if(dna === "") {
    return "";
  } else {
    const array1 = dna.split("");
    const array2 = [];
    for(const letter of array1) {
      if(letter === "A") {
        array2.push("T")
      } else if(letter === "T") {
        array2.push("A")
      } else if(letter === "C") {
        array2.push("G")
      } else if(letter === "G") {
        array2.push("C")
      }
    }
    return array2.join("");
  }
}
