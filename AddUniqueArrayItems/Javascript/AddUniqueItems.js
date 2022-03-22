console.log(UniqueArrayItems([1,1,2,3,4,4,5,5,5,-9]));
console.log(UniqueArrayItems([1,2,3,4,5]));

function UniqueArrayItems(inArray) {
    let hash = {};
    let itemSum = 0;

    // Count and store the values into a hash
    inArray.forEach(element => {
        hash[element] = hash[element] ? hash[element] + 1 : 1;
    });

    console.log(hash);

    // Now see if the values are unique and add the keys if there is only 1 occurrence
    for (const [key, value] of Object.entries(hash)) {
        console.log(key, value);
        if (value === 1) {
            itemSum += parseInt(key);
        }
    }

    return itemSum;
}