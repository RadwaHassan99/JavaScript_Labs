console.log("working...........");
var words;

function countVowels(paragraph) {
    var count = 0;
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i] == 'a' || paragraph[i] == 'e' || paragraph[i] == 'o' || paragraph[i] == 'u' || paragraph[i] == 'i') {
            count++;
        }
    }
    return count;
}
var cancel = false;
while (cancel == false) {
    words = prompt("Enter your String");
    var numberOfVowels = countVowels(words);
    alert("Number of vowels in your string is: " + numberOfVowels);
    cancel = confirm("Do you Want to Exit ?");
}