/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here

  let smallestNum = 1;
  let divNum = 0;

  // this will end once divNum is smaller than ceiling
  while (divNum < ceiling) {
    divNum = 0;
    smallestNum++;
    console.log(smallestNum);

    for (let i = 1; i <= ceiling; i++) {
      console.log("i: " + i);
      if (smallestNum % i === 0) {
        divNum++;
        console.log("divNum: " + divNum);
      } else {
        break;
      }
    }
  }

  return smallestNum;
};
