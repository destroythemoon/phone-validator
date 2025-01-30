const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const verifyNumber = () => {
  if (input.value === "") {
    alert("Please provide a phone number")
    return;
  }

  const numberRegex = /^(1\s?)?(\(\d{3}\)|(\d{3}))[\s\-]?(\d{3})[\s\-]?(\d{4})$/;

  if (numberRegex.test(input.value)) {
    result.innerText = `Valid US number: ${input.value}`;
  } else {
    result.innerText = `Invalid US number: ${input.value}`;
  }
}

const clear = () => {
  result.innerHTML = "&#8203;";
  input.value = "";
}

checkButton.addEventListener("click", verifyNumber)
clearButton.addEventListener("click", clear)