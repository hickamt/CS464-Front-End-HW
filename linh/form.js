// Add your code here
let form = document.querySelector("form");

const handleSubmit = function submitFormAndPrint(event) {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let registration = document.querySelector("#class-select option:checked");
  let checkbox = document.querySelectorAll('input[type = "checkbox"]:checked');
  let anything = document.querySelector("#anything");

  document.getElementById("anything").defaultValue = "";
  console.group();
  console.log("=========Form Submission=========");
  console.log("Name: " + name.value);
  console.log("Email: " + email.value);
  console.log("Class Registration: " + registration.value);

  if (checkbox.length === 0) {
    console.log("Course Taken: none of the course");
  } else {
    const array = [];
    for (let checked of checkbox) {
      array.push(checked.value);
    }
    console.log("Course Taken: ", array.join(", "));
  }

  if (anything.value === "" || !anything.value) {
    console.log("Feedback: no Feedback");
  } else {
    console.log("Feedback: " + anything.value);
  }

  console.groupEnd();
  event.preventDefault();
};

form.addEventListener("submit", handleSubmit);