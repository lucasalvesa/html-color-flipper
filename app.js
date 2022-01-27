const colors = [ 0, 0, 0 ];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

const getRandomNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

btn.addEventListener("click", () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i] = getRandomNumber(0, 255);
    }
    
    document.body.style.backgroundColor = `rgb(${colors})`;
    color.textContent = `rgb(${colors})`;
});