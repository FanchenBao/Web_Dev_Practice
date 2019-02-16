const report = function (res) {
  document.getElementById("res_d_to_2").innerHTML = res;
};

document.getElementById("d_to_2").onclick = function () {
  let deci = Number(document.getElementById("decimal").value);
  if (checkDeciValid(deci))
    report(buildStr(deciToTwos(deci)));
  else
    report("Please enter a number.");
};






// check whether the given value val is a number
const checkDeciValid = val => !Number.isNaN(val);

// Convert decimal to 2's complement
// return 2's complement in string form
// Default 8 bits
const deciToTwos = function(deci){
  let res = [];
  while (res.length < 8) // default res to 0
    res.push(0);
  
  let isNeg = false;
  if (deci < 0)
    isNeg = true;
  deci = Math.abs(deci); // turn deci into positive to make binary conversion easier
  
  for (let i = res.length - 1; deci !== 0; i--){
    res[i] = deci % 2;
    deci = Math.floor(deci / 2);
  }
  
  return res;
};

const buildStr = function(binArray){
  // turn a binary number in array format into a string, with every four digits separated by a space
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