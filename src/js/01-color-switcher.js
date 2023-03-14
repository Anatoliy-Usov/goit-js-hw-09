const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let intervalBackgroundColor = 0;

function color() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  startBtn.setAttribute('disabled', 'true');
  intervalBackgroundColor = setInterval(() => {
    bodyBackgroundColor.style.backgroundColor = color();
  }, 500);
  stopBtn.removeAttribute('disabled');
}
function onStop() {
  clearInterval(intervalBackgroundColor);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
}
