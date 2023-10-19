// Add your code here
const randomBackground = function createRandomBackground() {
  let x = Math.ceil(Math.random() * 256);
  let y = Math.ceil(Math.random() * 256);
  let z = Math.ceil(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
};

let intervalId;

const changeBackground = function changeBackgroundColor() {
  let myInputValue = parseInt(document.getElementById("interval").value);
  let button = document.getElementById("btn");
  let buttonText = button.innerText;

  if (buttonText === "Start") {
    button.innerText = "Stop";
    document.getElementById("btn").className = "btn btn-danger";
    intervalId = setInterval(randomBackground, myInputValue * 1000);
  } else {
    button.innerText = "Start";
    document.getElementById("btn").className = "btn btn-success";
    clearInterval(intervalId);
  }
};

window.addEventListener("load", changeBackground);
document.getElementById("btn").addEventListener("click", changeBackground);
