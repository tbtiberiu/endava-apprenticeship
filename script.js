const resultInput = document.querySelector("#result");
const buttons = document.querySelectorAll("[type='button']");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;

    if (value === "=") {
      resultInput.value = eval(resultInput.value);
    } else if (value === "AC") {
      resultInput.value = "";
    } else if (value === "<=") {
      resultInput.value = resultInput.value.slice(0, -1);
    } else if (value === "." && resultInput.value.includes(".")) {
      return;
    } else {
      resultInput.value += value;
    }
  });
});
