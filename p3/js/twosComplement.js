/* Main Logic*/
const reportDeciToTwos = function (res) {
  document.getElementById("res_d_to_2").value = res;
};

const reportTwosToDeci = function (res) {
  document.getElementById("res_2_to_d").value = res;
};

const beautifyBinInput = function(res) {
  document.getElementById("twos").value = res;
}

// decimal to two's complement button click
document.getElementById("d_to_2").onclick = function () {
  // retrieve number of bits information
  let numBits = Number(document.getElementById("bitSelect").value);

//  // max number (not in 2's complement form) that can be expressed under the numBits requirement. This value is used to compute the 1's complement of any positive number
//  let maxNum = Math.pow(2, numBits) - 1;
  // Max positive and most negative number in 2's complement form
  let maxTwosPos = Math.pow(2, numBits - 1) - 1;
  let maxTwosNeg = -Math.pow(2, numBits - 1);
  
  let deciStr = (document.getElementById("decimal").value).trim(); // this is to turn empty white space input into empty input
  switch (checkDeciValid(deciStr, maxTwosNeg, maxTwosPos)){
    case 1:
      let twosArray = deciToTwos(Number(deciStr), numBits);
      let strBinary = beautifyBinary(twosArray); // turn binary number from array to str representation
      reportDeciToTwos(strBinary);
      break;
    case 2:
      alert(`ERROR: Number out of range. Please enter a number between ${maxTwosNeg} and ${maxTwosPos}.`);
      break;
    case 3:
      alert("ERROR: Please enter an integer number.");
      break;
  }
};


// two's complement to decimal button click
document.getElementById("2_to_d").onclick = function () {
  // retrieve number of bits information
  let numBits = Number(document.getElementById("bitSelect").value);
  let binStr = (document.getElementById("twos").value).trim();
  let twosArray = [];
  while (twosArray.length < numBits) // default res to 0
    twosArray.push(0);
  switch (checkBinValid(binStr, twosArray, numBits)){
    case 1:
      let strBinary = beautifyBinary(twosArray); // twosArray has been cleaned up in checkBinValid(), now ready to turn into str representation
      let deci = twosToDeci(twosArray, numBits);
      reportTwosToDeci(deci);
      beautifyBinInput(strBinary); // reformat user's input in case it is less friendly to look at
      break;
    case 2:
      alert(`ERROR: Number out of range. Please enter ${numBits} or fewer bits`);
      break;
    case 3:
      alert("ERROR: Please enter a binary consisting of only 1 or 0 (space is allowed between the digits).");
      break;
  }
};
  


/* Helper Functions */
// Check whether the given value deciStr (given as a string) is a number and within the numBits requirement. deciStr has to be passed as a string becasue if I turn it into number initially, I cannot distinguish between user input 0 and empty input and white spaces input.
// Return 1 = deciStr is completely valid, 2 = deciStr is a number of out of range set by numBits, 3 = deciStr is not a number
const checkDeciValid = (deciStr, maxTwosNeg, maxTwosPos) => {
  if (deciStr){ // deciStr is not empty
    let deci = Number(deciStr); // turn into number and then check
    if (!Number.isInteger(deci)) // not an integer
      return 3;
    else{ // deciStr is a number
      if (deci > maxTwosPos || deci < maxTwosNeg)
        return 2; // out of range
      else
        return 1; // complete valid
    }
  }
  else // If deciStr is empty
    return 3;
};


// Check whether the given binStr represents a valid binary number with only "1" and "0" as its components and with length ≤ numBits.
// twosArray is modified in place. It is the array representation of binStr
// Return 1 = valid binary number, 2 = too many bits, 3 = invalid binary number
const checkBinValid = function(binStr, twosArray, numBits){
  if (!binStr) // binStr is empty
    return 3;
  let j = numBits - 1;
  for (let i = binStr.length - 1; i >= 0; i--){
    if (j < 0) // too many bits
      return 2;
    
    if (binStr.charAt(i) === "1" || binStr.charAt(i) === "0")
      twosArray[j--] = Number(binStr.charAt(i));
    else if (binStr.charAt(i) === " "){} // skip white spaces
    else // input has invalid character
      return 3;
  }
  return 1;
};



// Turn a decimal number into its 2's complement.
// The deci passed in has already been checked and guaranteed to be a valid number.
// Return value is 2's complement represented by an array
const deciToTwos = function(deci, numBits){
  let tmp = toBin(Math.abs(deci), numBits); 
  if (deci < 0) // deci is negative, compute its 2's complement
    toTwosComplement(tmp, numBits);
  return tmp;
};



// Turn a 2's complement binary into decimal.
// Return a decimal number
const twosToDeci = function(twosArray, numBits){
  if (twosArray[0] === 1){ // negative
    toTwosComplement(twosArray, numBits); // in place modify twosArray to its 2's complement
    return -toDeci(twosArray, numBits);
  }
  return toDeci(twosArray, numBits); // positive
};



// Turn a given binary number (represented in array form) to its 2's complement form, in place. Nothing is returned
const toTwosComplement = function(binArray, numBits){
  for (let i = 0; i < numBits; i++) // 1's complement
      binArray[i] = binArray[i] ^ 1;
  for (let i = numBits - 1; i >= 0; i--){ // 2's complement
    if (binArray[i] == 1)
      binArray[i] = 0;
    else{
      binArray[i] = 1;
      break;
    }
  }
};


// Convert positive decimal to binary
// numBits denotes how many bits are in the binary
// return the array representation of binary number
const toBin = function(deci, numBits){
  let binArray = [];
  while (binArray.length < numBits) // default res to 0
    binArray.push(0);
  for (let i = binArray.length - 1; deci !== 0; i--){
    binArray[i] = deci % 2;
    deci = Math.floor(deci / 2);
  }
  return binArray;
};



// Turn a binary number to decimal and return the decimal value
const toDeci = function(binArray, numBits){
  let res = 0;
  for (let i = numBits - 1; i >= 0; i--)
    res += Math.pow(2, numBits - 1 - i) * binArray[i];
  return res;
};


// turn a binary number in array format into a string, with every four digits separated by a space
const beautifyBinary = function(binArray){
  let end = binArray.length;
  let beg = end - 4;
  let res = "";
  while (beg >= 0){
    res = binArray.slice(beg, end).join("") + " " + res;
    beg -= 4;
    end -= 4;
  }
  return res.trim();
};