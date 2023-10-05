// Joshua Wachana

const elem = document.querySelector('input');

function displayText(bool, message) {
  const outputDiv = document.getElementById('output');
  if (bool) {
    outputDiv.classList.remove('text-danger');
    outputDiv.classList.add('text-success');
  } else {
    outputDiv.classList.remove('text-success');
    outputDiv.classList.add('text-danger');
  }
  outputDiv.innerHTML = message;
}

function handleInput() {
  const enteredValue = document.getElementById('input').value;

  if (Number.isNaN(enteredValue)) {
    displayText(false, 'Error! Non-numeric character(s) entered!');
  } else if (enteredValue < 0) {
    displayText(false, 'Error! Negative number entered!');
  } else if (enteredValue === '') {
    displayText(false, '');
  } else {
    const enteredStringArray = enteredValue.split('');
    const reversedStringArray = enteredStringArray.reverse();
    const reversedString = reversedStringArray.join('');

    if (enteredValue === reversedString) {
      displayText(true, 'Yes! This is a palindrome!');
    } else {
      displayText(false, 'No. Try again.');
    }
  }
}

elem.addEventListener('input', handleInput);
