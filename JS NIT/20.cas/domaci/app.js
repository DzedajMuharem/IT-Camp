function isPalindrome(x) {
  let d = x.toLowerCase();
  let c = "";
  for (let i = d.length - 1; i >= 0; i--) {
    c += d[i];
  }
  if (c === d) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("palindrom"));
