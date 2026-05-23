let x = 2;
let y = 1;

x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)