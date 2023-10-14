/**
 * get form id 'registration-form' and set
 * innerHTML = new body showing all values submitted
 * form[0].reset();
 */

// const form = document.getElementById('registration-form');

/**
 * Full Name: (name)
 * Email: (email)
 * Registration Status:
 * Have you taken any of the following courses?
 * (program-language, operating-systems, full-stack-web-dev)
 * Comments:
 */

document
  .getElementById("registration-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Name: ", formValues.name);
    console.log("Email: ", formValues.email);
    console.log("Registration: ", formValues.registration);

    const courses = document.querySelectorAll("input");
    for (let course of courses) {
      if (course.checked) {
        console.log(course.value);
      }
    }
  });
