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

const submitMessage = {
  name: "Full Name: ",
  email: "Email: ",
  regStatus: "Registration Status: ",
  courses: "Courses Taken: ",
  comment: "Comments: ",
  className: 'class="fw-4 fw-bold p-2"',
};

const displayMessage = function createHTMLDivDisplay({
  className,
  name,
  email,
  regStatus,
  courses,
  comment,
}) {
  return `<div ${className}>
  <h1>Submission</h1>
  <p>${name}</p>
  <p>${email}</p>
  <p>${regStatus}</p>
  <p>${courses}</p>
  <p>${comment}</p>
  </div>`;
};

document
  .getElementById("registration-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    submitMessage.name += formValues.name;
    submitMessage.email += formValues.email;
    submitMessage.regStatus += formValues.registration;
    submitMessage.comment += formValues.textArea;

    const courses = document.querySelectorAll("input");
    for (let course of courses) {
      if (course.checked) {
        submitMessage.courses += ` ${course.value}`;
      }
    }

    document.getElementById("registration-form").innerHTML =
      displayMessage(submitMessage);

    console.log(submitMessage)
  });
