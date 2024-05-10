const numBtns = document.querySelectorAll(".btn");
const inputResult = document.getElementById("input-result");
let numInBtn;
let signInBtn;

numBtns.forEach((element) => {
  element.addEventListener("click", (event) => {
    numInBtn = event.target.dataset.number;
    signInBtn = event.target.dataset.sign;
  });
});

const calc = (numInBtn, signInBtn) => {
  if (numInBtn && signInBtn) {
    let result = parseInt(numInBtn) + parseInt(signInBtn) + parseInt(numInBtn);
    return result;
  } else {
    console.log("No hay suficientes datos para calcular.");
    return NaN;
  }
};
