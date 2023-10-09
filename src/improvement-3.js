/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3

const findLargestNumber = (numbers) => {
  let largest = numbers[0];
  for (let number of numbers) {
    number > largest ? (largest = number) : number;
  }
  return largest;
};

export default findLargestNumber;
