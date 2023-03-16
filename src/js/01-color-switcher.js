const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let intervalBackgroundColor = 0;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function color() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStart() {
  startStopBtn(stopBtn, startBtn);
  intervalBackgroundColor = setInterval(() => {
    bodyBackgroundColor.style.backgroundColor = color();
  }, 500);
}

function onStop() {
  clearInterval(intervalBackgroundColor);
  startStopBtn(startBtn, stopBtn);
}

function startStopBtn(buttonDisable, buttonEnable) {
  buttonEnable.setAttribute('disabled', 'true');
  buttonDisable.removeAttribute('disabled');
}
