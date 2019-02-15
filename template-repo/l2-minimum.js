 console.log (Math.min (10, 1));

// of als je moeilijk wil doen

function min(a, b) {
    if (a< b) return a;
    else return b;
}

console.log(min(120, 5));

//recursion 
function isEven(x) {
  if (x == 0) return true;
  else if (x == 1) return false;
  else if (x < 0) return isEven(-x);
  else return isEven(x - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
