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
    if (btn.id === "=") {
      display.value = eval(display.value);
    } else if (btn.id === "reset") {
      display.value = "";
    } else if (btn.id === "del") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.id;
    }
  });
});
