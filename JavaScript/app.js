const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeBtns = document.querySelectorAll(".theme-btn");
const bodyTheme = document.getElementById("body");

themeBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (index === 0) {
      bodyTheme.classList.add("theme-1");
      bodyTheme.classList.remove("theme-2");
      bodyTheme.classList.remove("theme-3");
    } else if (index === 1) {
      bodyTheme.classList.add("theme-2");
      bodyTheme.classList.remove("theme-1");
      bodyTheme.classList.remove("theme-3");
    } else if (index === 2) {
      bodyTheme.classList.add("theme-3");
      bodyTheme.classList.remove("theme-1");
      bodyTheme.classList.remove("theme-2");
    }
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleInput(btn.id);
  });
});

document.addEventListener("keydown", (event) => {
  if (
    (event.key >= "0" && event.key <= "9") ||
    ["+", "-", "*", "/", "."].includes(event.key)
  ) {
    handleInput(event.key);
  } else if (event.key === "Enter") {
    handleInput("=");
  } else if (event.key === "Backspace") {
    handleInput("del");
  } else if (event.key === "Escape") {
    handleInput("reset");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  display.value = "0";
});

function handleInput(input) {
  if (input === "=") {
    if (display.value.trim() === "") {
      return;
    }
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  } else if (input === "reset") {
    display.value = "0";
  } else if (input === "del") {
    display.value = display.value.slice(0, -1);
  } else {
    if (display.value === "0") {
      display.value = input;
    } else {
      display.value += input;
    }
  }
}
