// A function that gets a count of the number of vowels in a string
console.log(FindVowels("this is a test string"));  // should return 5
console.log(FindVowels("I am the man!"));  // should return 4
console.log(FindVowels("where"));  // should return 2
console.log(FindVowels("why")); // should return 0
console.log(FindVowels("")); // should return 0
console.log(FindVowels(123)); // should return 0
console.log(FindVowels("How much wood would a woodchuck chuck?"));  // should return 11

function FindVowels(inString) {
    const vowels = ['a','e','i','o','u'];
    let vowelCount = 0;

    if (typeof inString === "string" && inString !== undefined) {
        for (let char of inString.toLowerCase()) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}