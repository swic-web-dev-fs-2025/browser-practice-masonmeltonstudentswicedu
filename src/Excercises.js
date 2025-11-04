import "./style.css";

let clickCount = 0;

document.querySelector("#app").innerHTML = `
  <main class="mx-auto max-w-xl p-6 font-sans">
    <h1 id="greeting" class="text-3xl font-bold mb-4">Hello, Console JavaScript!</h1>

    <div class="flex gap-2 mb-4">
      <button id="change-greeting" class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Update Greeting
      </button>
      <button id="reset" class="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">
        Reset
      </button>
    </div>

    <p id="click-count" class="text-lg">Button clicks: 0</p>

    <div class="mt-4">
      <label for="custom-greeting" class="block text-sm text-gray-600 mb-1">Custom greeting</label>
      <input id="custom-greeting" class="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" placeholder="Type your greeting..." />
    </div>
  </main>
`;

const greetingEl = document.getElementById("greeting");
const buttonEl = document.getElementById("change-greeting");
const resetEl = document.getElementById("reset");
const countEl = document.getElementById("click-count");
const inputEl = document.getElementById("custom-greeting");

function updateGreeting() {
  clickCount++;
  const custom = inputEl.value.trim();
  greetingEl.textContent = custom || "Hello, Browser JavaScript!";
  countEl.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 5) greetingEl.style.color = "crimson"; // Exercise 2 color change
}

function resetAll() {
  clickCount = 0;
  greetingEl.textContent = "Hello, Console JavaScript!";
  greetingEl.style.color = "";
  countEl.textContent = "Button clicks: 0";
  inputEl.value = "";
}

buttonEl.addEventListener("click", updateGreeting);
resetEl.addEventListener("click", resetAll);

window.greetingElement = greetingEl;