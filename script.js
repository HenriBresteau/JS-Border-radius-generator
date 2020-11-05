const canvas = document.getElementById('canvas');
const codeToCopy = document.getElementById('codeToCopy');

let radius =0;

function resultDisplay() {
    canvas.style.borderRadius = radius +'px';
    codeToCopy.value = `border-radius: ${radius}px;`
}

document.addEventListener('input', (e) => {
    radius = e.target.value;
    resultDisplay();
})