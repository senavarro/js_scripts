// Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero.

function checkSign(num) {
  return (num > 0 ? "positive" : (num < 0 ? "negative" : (num === 0 ? "zero" : "not possible")));
}

checkSign(10);