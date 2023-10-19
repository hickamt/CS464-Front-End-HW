// Add your code here
const form = document.querySelector("#form");

const format = (elementValue) => {
  if (elementValue === "") {
    return "No Value Entered";
  } else {
    return elementValue;
  }
};

const printDataToConsole = (name, email, regStatus, courses, msg) => {
  console.group("========= Entered Data ========");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Registration Status: ${regStatus}`);
  console.log(`Courses: ${format(courses)}`);
  console.log(`Message: ${msg}`);
  console.groupEnd();

  form.reset();
};

const submitHandler = (e) => {
  e.preventDefault();

  const data = format(form.elements);
  const name = format(data.name.value);
  const email = format(data.email.value);
  const regStatus = format(data.registrationStatus.value);
  const msg = format(data.msg.value);
  let courses = "";

  data.courses.forEach((checkbox) => {
    if (checkbox.checked === true) {
      courses += ` ${checkbox.value}`;
    }
  });

  printDataToConsole(name, email, regStatus, courses, msg);
};

form.addEventListener("submit", submitHandler);
