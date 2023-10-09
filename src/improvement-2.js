/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2

const processItems = (items) => {
  let processedItems = [];
  for (let item of items) {
    item.type === "Food" ? processedItems.push(item) : processedItems;
  }
  return processedItems;
};

export default processItems;
