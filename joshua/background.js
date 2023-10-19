// Add your code here
const btn = document.querySelector('#btn');
const input = document.querySelector('#input-number');
const body = document.querySelector('#body');
let interval;
let changeBackgroundInterval;
let started = false;

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255);
};

const changeBackgroundColor = () => {
  if (started === true) {
    body.classList.remove('bg-primary');
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
};

const clickHandler = () => {
  let inputNumber = input.value;
  if (inputNumber <= 0 || inputNumber === '') {
    alert('Error: You entered an invalid number!');
    return;
  }
  started = !started;
  if (started === true) {
    btn.classList.remove('bg-primary');
    btn.classList.add('bg-danger');
    btn.textContent = 'Stop';
    interval = inputNumber * 1000;
    clearInterval(changeBackgroundInterval);
    changeBackgroundInterval = setInterval(changeBackgroundColor, interval);
  } else {
    btn.classList.remove('bg-danger');
    btn.classList.add('bg-primary');
    btn.textContent = 'Start';
  }
};

btn.addEventListener('click', clickHandler);