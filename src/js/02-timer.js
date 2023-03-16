import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const timeSeconds = document.querySelector('span[data-seconds]');
const timeMinutes = document.querySelector('span[data-minutes]');
const timeHours = document.querySelector('span[data-hours]');
const timeDays = document.querySelector('span[data-days]');
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose([selectedDates]) {
    if (selectedDates.getTime() < Date.now()) {
      startBtn.setAttribute('disabled', 'true');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      startBtn.removeAttribute('disabled');
    }
    timeTimer = selectedDates;
  },
};

startBtn.addEventListener('click', onBtnStart);

function onBtnStart() {
  startBtn.setAttribute('disabled', 'true');
  timerRun();
}

function addZero(value) {
  return String(value).padStart(2, '0');
}

function timerRun() {
  const timeRun = setInterval(() => {
    const currentDate = Date.now();
    let msLeft = timeTimer - currentDate;
    let convertedTime = convertMs(msLeft);
    let { days, hours, minutes, seconds } = convertedTime;

    timeSeconds.textContent = seconds;
    timeMinutes.textContent = minutes;
    timeHours.textContent = hours;
    timeDays.textContent = days;

    if (msLeft <= 1000) {
      clearInterval(timeRun);
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addZero(Math.floor(ms / day));
  const hours = addZero(Math.floor((ms % day) / hour));
  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

flatpickr('input[type="text"]', options);
