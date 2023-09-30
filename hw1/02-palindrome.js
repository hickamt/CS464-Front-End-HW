function writeInnerHTML(innerValue) {
  document.getElementById("palindrome").innerHTML = innerValue;
}

const isPalindrome = (fwd_array, rev_array) => {
  return fwd_array.length === rev_array.length && fwd_array.length > 0
    ? fwd_array.every((value, index) => value === rev_array[index])
    : "No Value Entered";
};

document.querySelector("input").addEventListener("input", () => {
  const inputValue = document.querySelector("input").value;
  writeInnerHTML(
    isPalindrome(inputValue.split(""), inputValue.split("").reverse())
  );
});
