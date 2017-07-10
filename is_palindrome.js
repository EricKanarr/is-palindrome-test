// var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
// var checkPalindrome = removeChar.split('').reverse().join('');


function isPalindrome(text) {
  var removeChar = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  console.log(removeChar);
   let n = 0;
   for(let i = removeChar.length - 1; i >= 0; i--){
     if (removeChar.charAt(i) === removeChar.charAt(n)){
       return true;
       n++;
     }
  else{
    return false;
  }
}
}

module.exports = isPalindrome;
