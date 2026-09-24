// ============================================
// RANDOM COLOR BUTTON — starter code
// ============================================
//
// Your task:
// 1. Write a function that generates a random color (a random hex code
//    works well).
// 2. Write a function that takes a color as a PARAMETER and sets
//    document.body.style.backgroundColor to that color.
// 3. Get a reference to the button in index.html.
// 4. Add an event listener so a click calls your functions.
//
// Fill in the TODOs below. Delete the comments as you go.


// --- 1. Generate a random color -------------------------------------
// Hint: instead of building a hex code character-by-character, keep an
// array of a few preset colors and pick one at random.
//
// Math.random() gives you a decimal between 0 and 1. Multiply it by
// the array's length and round down (Math.floor) to get a random,
// valid index into that array — e.g. for a 5-color array, this gives
// you 0, 1, 2, 3, or 4.

const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6A4C93', '#1A936F'];

function getRandomColor() {
  // TODO: pick a random index into `colors` and return that color

}


// --- 2. Set the background color -------------------------------------
// This function should NOT generate a color itself — it just takes
// whatever color is handed to it and applies it. That's what makes it
// reusable.

function setBackgroundColor(color) {
  // TODO: set document.body.style.backgroundColor to `color`

}


// --- 3. Get a reference to the button ---------------------------------

// TODO: use document.getElementById (or similar) to grab the button
// const myButton = ...


// --- 4. Add the event listener -----------------------------------------
// When the button is clicked, you want to:
//   a) generate a new random color
//   b) pass that color into setBackgroundColor()
//
// myButton.addEventListener('click', yourFunction);
//
// Careful: pass the FUNCTION itself, not the result of calling it.
// Wrong:  myButton.addEventListener('click', handleClick());
// Right:  myButton.addEventListener('click', handleClick);

// TODO: add your event listener here
