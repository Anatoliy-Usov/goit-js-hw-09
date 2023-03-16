const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let intervalBackgroundColor = 0;

function color() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startStopBtn() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', 'true');
}

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  startStopBtn();
  intervalBackgroundColor = setInterval(() => {
    bodyBackgroundColor.style.backgroundColor = color();
  }, 500);
}
function onStop() {
  clearInterval(intervalBackgroundColor);
  startStopBtn();
}
