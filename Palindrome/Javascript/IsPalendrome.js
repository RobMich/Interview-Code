console.log(IsPalendrome("racecar"));
console.log(IsPalendrome("legend"));


// Check to see if the input string is a palendrome
function IsPalendrome(inputStr) {
    inputStr = inputStr.toLowerCase();
    let retVal = inputStr === inputStr.split("").reverse().join("");
    return retVal;
}