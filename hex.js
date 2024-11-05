const btn = document.getElementById('btn');
const colorText = document.querySelector(".color");

const generateHexColor = () => `#${Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 16).toString(16)).join('')}`;

const updateBackgroundColor = () => {
    const newColor = generateHexColor();
    document.body.style.backgroundColor = newColor;
    colorText.textContent = newColor;
};

btn.addEventListener("click", updateBackgroundColor);