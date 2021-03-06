/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

export function coinFlips(flips) {
  let returnArray = [];
  for (var i = 0; i < flips; i++) {
    returnArray[i] = coinFlip();
  }
  return returnArray;
}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

export function countFlips(array) {
  var headCounter = 0;
  var tailCounter = 0;
  
  for (var i =0; i < array.length; i++) {
    if (array[i] == "heads") {
      headCounter++;
    }
    else {
      tailCounter++;
    }
  }
  if (headCounter == 0) {
    return {"tails": tailCounter};
  }
  if (tailCounter == 0) {
    return {"heads": headCounter};
  }
  return { "tails": tailCounter, "heads": headCounter};
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  var flipper = coinFlip();
  var result = "";

  if (flipper == call) {
    result = "win";
  } else {
    result = "lose";
  }
  return {"call": call, "flip": flipper, "result": result};
}


/** Export 
 * 
 * Export all of your named functions
*/
