const report = function (res) {
  document.getElementById("result").innerHTML = res;
};

document.getElementById("f_to_c").onclick = function () {
  let f = Number(document.getElementById("temperature").value);
  if (checkValid(f))
    report(buildRes(FtoC(f), f));
  else
    report("Please enter a number.");
};

document.getElementById("c_to_f").onclick = function () {
  let c = Number(document.getElementById("temperature").value);
  if (checkValid(c))
    report(buildRes(c, CtoF(c)));
  else
    report("Please enter a number.");
};

const FtoC = f => (f - 32) / 1.8;

const CtoF = c => 1.8 * c + 32;

// check whether the given value val is a number
const checkValid = val => !Number.isNaN(val);

const buildRes = (c, f) => String(c.toFixed(2)) + "\xb0C = " + String(f.toFixed(2)) + "\xb0F";