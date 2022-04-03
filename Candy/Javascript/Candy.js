console.log(Candy([1,2])); // Output = 3, [1,2]
console.log(Candy([1, 5, 2, 1])); // Output = 7, [1,3,2,1] 
console.log(Candy([1,0,2])); // Output = 5, [2,1,2]
console.log(Candy([1,2,2])); // Output = 4, [1,2,1]
console.log(Candy([0,2,0,6,6])); // Output = 7, [1,2,1,2,1]
 
function Candy(inArray) {
    retVal = 0;
    countArray = new Array(inArray.length);

    // Each child must get 1 candy.
    countArray = countArray.fill(1);
    //console.log(inArray);

    //If there is is only one child, then just return the inArray count because only 1 candy has been disributed
    if (inArray.length < 2) {
        retVal = inArray.length;
    } else {
        // We'll need to do a double pass on the input array.  One forward and one backward.
        // The association count array will be incremented if necessary on each pass
        // Forward Loop
        for (let i=0; i < inArray.length-1; i++) {
            if (inArray[i] >= inArray[i+1]) {
                continue;
            } else {
                //countArray[i+1] = countArray[i] + 1;
                countArray[i+1] = Math.max(countArray[i] + 1, countArray[i+1]);
            }
        }
        //console.log('First Pass:');
        //console.log(countArray);

        // Reverse Loop
        for (let j=inArray.length-1; j > 0; j--) {
            if (inArray[j] >= inArray[j-1]) {
                continue;
            } else {
                countArray[j-1] = Math.max(countArray[j] + 1, countArray[j-1]);
            }
        }
        console.log('Candy Distribution:');
        console.log(countArray);

        // Count Loop
        for (let k=0; k < countArray.length; k++) {
            retVal = retVal + countArray[k];
        }
    }

    return retVal;
}