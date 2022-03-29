console.log(SubarraySum([1,2,3,7,5], 12));
console.log(SubarraySum([1,2,3,4,5,6,7,8,9,10], 15));

function SubarraySum(inArray, target) {
    subArray = [];
 
    // Start looping with the first element
    for (let i = 0; i < inArray.length; i++) {
        let sum = inArray[i];
        //console.log(i);
        // Start another loop to add the values after the value from the top loop
        for (let j = i+1; j < inArray.length; j++) {
            sum += inArray[j];
            //console.log(sum);
            if (sum === target) {
                console.log('Target hit: ' + sum);
                return inArray.slice(i,j+1);
            }
        }
    }

    return subArray;
}