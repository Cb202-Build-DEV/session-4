// ============================================
// RANDOM COLOR BUTTON — one possible solution
// ============================================
// To try this version: in index.html, change
//   <script src="script.js"></script>
// to
//   <script src="solution.js"></script>

// 1. Generate a random color by picking one from a preset list
const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6A4C93', '#1A936F'];

function getRandomColor() {
  // Math.random() gives a decimal between 0 and 1 (e.g. 0.3821).
  // Multiplying by 5 spreads that over 0–5, and Math.floor() rounds
  // down, so we land on a whole number 0, 1, 2, 3, or 4 — a valid
  // index into the 5-item colors array.
  const randomIndex = Math.floor(Math.random() * 5);
  return colors[randomIndex];
}

// 2. Apply a color that's handed to it (a parameter, not generated here)
function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// 3. Reference to the button
const myButton = document.getElementById('myButton');

// 4. Event listener — on click, generate a color and apply it
myButton.addEventListener('click', function () {
  const newColor = getRandomColor();
  setBackgroundColor(newColor);
});

// --- Bonus variation using an arrow function instead ---
// myButton.addEventListener('click', () => {
//   setBackgroundColor(getRandomColor());
// });
