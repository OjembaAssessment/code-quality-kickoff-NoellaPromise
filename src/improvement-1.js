/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function cntrbt(ls) {
  let cnt = 0;
  for (let i = 0; i <= ls.length; i++) {
    if (ls[i] == "R") {
      cnt++;
    }
  }
  return cnt;
}
