
IsAnagramCheck("aaa bbcd", "cdababa");
IsAnagramCheck("aaa", "aaab");
IsAnagramCheck("Listen","Silent");
IsAnagramCheck("Dawg","D A w g");

function IsAnagramCheck(string1, string2) {
    isAnagram = false;

    // Remove the spaces from the strings
    string1 = string1.replace(/\s+/g, '').toUpperCase();
    string2 = string2.replace(/\s+/g, '').toUpperCase();

    console.log(string1);
    console.log(string2);
    // if the string lengths are not equal, then they are not anagrams
    if (string1.length === string2.length) {
        // Convert the strings to an array
        string1Array = string1.split("");
        string2Array = string2.split("");

        // Sort the arrays and then see if they match
        string1Array.sort();
        string2Array.sort();

        // Convert the arrays back to strings
        string1Clean = string1Array.join("");
        string2Clean = string2Array.join("");

        console.log(string1Clean);
        console.log(string2Clean);

        // If the two strings are equal, then they are anagrams
        if (string1Clean === string2Clean) {
            isAnagram = true;
        }
    }

    console.log(isAnagram);
    return isAnagram;
}