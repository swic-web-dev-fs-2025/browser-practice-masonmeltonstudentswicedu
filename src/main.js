import "./style.css";

let value = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

function render() {
  countEl.textContent = String(value);

  document.body.style.backgroundColor = value >= 10 ? "lightgreen" : "";
}

incBtn.addEventListener("click", () => {
  value += 1;
  render();
});

decBtn.addEventListener("click", () => {
  value -= 1;
  render();
});

resetBtn.addEventListener("click", () => {
  value = 0;
  render();
});

render();