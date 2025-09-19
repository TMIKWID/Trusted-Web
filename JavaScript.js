//alert("Welcome to Trusted Web!");
function changeText() {
  document.getElementById("greeting").innerText = "Welcome to Trusted Web!";
}
const glow = document.querySelector('.glow');

document.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});


const box = document.getElementById("discordlink");
let hovering = false;
let toggled = false; // track text state

// Save original text
const originalText = box.textContent;

// Track hover state
box.addEventListener("mouseenter", () => hovering = true);
box.addEventListener("mouseleave", () => hovering = false);

// Listen for keypress
document.addEventListener("keydown", (event) => {
  if (hovering && event.ctrlKey && event.key === "d") {
    event.preventDefault(); // stops browser bookmark shortcut

    // Toggle text
    if (!toggled) {
      box.textContent = "Text Changed!";
    } else {
      box.textContent = originalText;
    }

    // Animate
    box.classList.add("animate-text");
    setTimeout(() => box.classList.remove("animate-text"), 600);

    // Flip state
    toggled = !toggled;
  }
});

