/**
 * Build a frequency counter object from an array
 * @param {Array} arr any array
//  * The @param tag provides the name, type, and description of a function parameter.

The @param tag requires you to specify the name of the parameter you are documenting. You can also include the parameter's type, enclosed in curly brackets, and a description of the parameter.

 */
function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      // acc is accumulation, i.e. counter
      return acc;
    }, {});
  }
  
  /**
   * Find the most common element in the array
   * @param {Array} arr any array
   */
  function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
    // so we have the frequency count of the array we put in this function as an argument now as freqCounter, key: frequency
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        // if the frequency count for this key is greater than count (which is initialized at 0...)
        mostFrequent = key;
        // the current most frequently occurring number in the array is the key the for loop is currently on
        count = freqCounter[key];
        // the value of the key/value pair is now count so we can compare the highest frequency of a number in the array to the frequency of the number we're looking at next time through the loop
      }
    }
  
    return +mostFrequent;
  }
  
  /**
   * Attempt to convert an array of strings to an array of numbers
   * @param {Array} numsAsStrings array of strings
   * @returns {Array|Error} an array or an error object
   */
  function convertAndValidateNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let valToNumber = Number(numsAsStrings[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }
  
  function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (acc, cur) {
      return acc + cur;
    }) / nums.length
  }
  
  function findMedian(nums){
    // sort and get the middle element
  
    nums.sort((a, b) => a - b);
  
    let middleIndex = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
      median = nums[middleIndex];
    }
    return median
  }
  
  
  
  module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };
  