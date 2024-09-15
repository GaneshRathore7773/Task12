// let number = parseInt(prompt("enter a number"));
// let number = 153;

//to find factor
let factor = [];
let facnum = 153;
for (i = 0; i <= facnum; i++) {
  if (facnum % i === 0) {
    factor.push(i);
  }
  // console.log("received factor", factor);
}
console.log("received factor", factor);

//to get sum of digit of a number//
let givennumber = 153;
let totalvalue = 0;
let str2 = givennumber.toString();
for (i = 0; i < str2.length; i++) {
  let getnum = givennumber % 10;
  totalvalue = totalvalue + getnum;
  givennumber = Math.floor(givennumber / 10);
  // console.log(totalvalue);
}
console.log("the Total value of Givennumber =", totalvalue);

//to get table of n where n is a variable;
let n = 153;
let max = 10;
// let nums = parseInt(prompt("enter tab number"));
console.log("table of n number which is given by me");
for (i = 1; i <= max; i++) {
  let table = n * i;
  console.log(table);
}

//to get sum of first n number//
// let count = parseInt(prompt("enter number value of n"));
let count = 153;
let sum = 0;
for (i = 1; i < count + 1; i++) {
  sum = sum + i;
}
console.log("sum of first n number", sum);

//for chek number is prime or not //
let j = 0;
let chknum = 153;
for (i = 2; i < chknum; i++) {
  if (chknum % i == 0) {
    j++;
  }
}
if (j == 0) {
  console.log(chknum, "number is a prime");
} else console.log(chknum, "not a prime");

// for checking armstrong or not //
let chkarms = 153;
let str = chkarms.toString();
let mod = 0;
let arms = 0;
let realnum = chkarms;
for (i = 0; i < str.length; i++) {
  mod = chkarms % 10;
  arms = arms + mod ** str.length;
  chkarms = Math.floor(chkarms / 10);
}

if (arms === realnum) {
  console.log("number is armstrong number=", arms);
} else {
  console.log("number is not armstrong number =", arms);
}
