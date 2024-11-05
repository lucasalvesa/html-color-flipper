const btn = document.getElementById('btn');
const colorText = document.querySelector(".color");

const generateRandomColor = () => Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));

const updateBackgroundColor = () => {
    const rgbColor = generateRandomColor();
    const rgbString = `rgb(${rgbColor.join(', ')})`;
    document.body.style.backgroundColor = rgbString;
    colorText.textContent = rgbString;
};

btn.addEventListener("click", updateBackgroundColor);
