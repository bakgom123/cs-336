// Homework 03 Javascript file
// David Yoo, gy24, Sep 25,2022
// Make all of the buttons and hint first, and let the default display style to none, 
// so the hint and hide button won't be shown to the user first.
// And when the user clicks the show button, then change both the hide button and hint display style to block 

function showHint() {
    document.getElementById("show").style.display = "none";
    document.getElementById("hide").style.display = "block";
    document.getElementById("hint").style.display = "block";
}
  
function hideHint() {
    document.getElementById("hide").style.display = "none";
    document.getElementById("hint").style.display = "none";
    document.getElementById("show").style.display = "block";
}