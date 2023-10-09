/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
const numberOfOccurences = (word) => {
  let count = 0;
  for (const letter of word) {
    letter === "R" ? count++ : null;
  }
  return count;
};

export default numberOfOccurences;
