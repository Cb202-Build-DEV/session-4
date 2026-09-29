const colors = ['#020887', '#334195', '#647AA3', '#95B2B0', '#C6EBBE']

const getRandomColor = () => {
    const randIndex = Math.floor(Math.random() * 5);
    return colors[randIndex];
}

const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
    const newColor = getRandomColor();
    setBackgroundColor(newColor);
});
