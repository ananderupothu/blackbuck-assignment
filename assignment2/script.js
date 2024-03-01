const colorInfo = document.getElementById('colorInfo');
const changeColorBtn = document.getElementById('changeColorBtn');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorInfo.textContent = `Background Color: ${randomColor}`;
}

changeColorBtn.addEventListener('click', updateColor);

// Initial update on page load
updateColor();
