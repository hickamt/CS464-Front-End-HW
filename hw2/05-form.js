// Function that consoles the form submission field index and value

/**
 * The React Library useState() method
 * Source: https://stackoverflow.com/questions/64744252/how-to-replicate-usestate-with-vanilla-js
 */
const useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (updateValue) => (value = updateValue);
  return [getValue, setValue];
};

const [formData, setFormData] = useState({});
const [formValues, setFormValues] = useState({});
const [message, setMessage] = useState({});

const setCourses = function getSelectedCourses() {
  const courses = document.querySelectorAll("input");
  for (let course of courses) {
    if (course.checked) {
      message().courses += `${course.value} `;
    }
  }
};

const setConsoleMessage = function setConsoleLogMessage() {
  setMessage({
    name: formValues().name,
    email: formValues().email,
    regStatus: formValues().registration,
    courses: "",
    comment: formValues().textArea,
  });
};

const clearField = () => {
  document.getElementById("reset").click();
};

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    setFormData(new FormData(event.target));
    setFormValues(Object.fromEntries(formData().entries()));
    setConsoleMessage(formValues());
    setCourses();
    console.table(message());
    clearField();
  } catch (error) {
    console.log(error);
  }
});

