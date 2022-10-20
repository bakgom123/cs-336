// Homework 04 JavaScript file
// David Yoo, gy24, Sep 29,2022
// Idea from https://stackoverflow.com/questions/4593565/regular-expression-for-accurate-word-count-using-javascript 
// regex https://hamait.tistory.com/342
// g modifier from https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
// match() from https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match

function counter() {
    userInput = document.getElementById("userInputs");
    // convert the input values to upper case
    userInput.value = userInput.value.toUpperCase();
    // count how many words and characters
    words = document.getElementById("words");
    // [] means match any character contained in the character class
    // \w means any alphanemeric characters
    // g modifier finds all the occurrences of the pattern
    wordCount = userInput.value.match(/[\w]+/g);
    // plurals for word count
    words.innerHTML = wordCount.length + (wordCount.length != 1 ? " words" : " word"); 
    characters = document.getElementById("characters");
    // plurals for character count
    characters.innerHTML = userInput.value.length + (userInput.value.length != 1 ? " characters" : " character");
}