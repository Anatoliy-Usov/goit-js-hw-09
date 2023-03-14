import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

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

  onClose(onSelectedDates) {
    if (onSelectedDates[0].getTime() < options.defaultDate.getTime()) {
      startBtn.setAttribute('disabled', 'true');
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      startBtn.removeAttribute('disabled');
    }

    startBtn.addEventListener('click', () => {
      startBtn.setAttribute('disabled', 'true');
      const timerVision = setInterval(() => {
        const currentDate = new Date();
        let currentMs = Number(currentDate.getTime());
        let futureMs = onSelectedDates[0].getTime();
        let msLeft = Number(futureMs - currentMs);
        let convertedTime = convertMs(msLeft);

        timeSeconds.textContent = convertedTime.seconds
          .toString()
          .padStart(2, '0');
        timeMinutes.textContent = convertedTime.minutes
          .toString()
          .padStart(2, '0');
        timeHours.textContent = convertedTime.hours.toString().padStart(2, '0');
        timeDays.textContent = convertedTime.days.toString().padStart(2, '0');
        if (futureMs - currentMs <= 1000) {
          clearInterval(timerVision);
        }
      }, 1000);
    });
  },
};
flatpickr('input[type="text"]', options);
