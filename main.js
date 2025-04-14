const modeToggle = document.getElementById("mode");

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark"; // Default to light if no theme is saved
  document.documentElement.setAttribute("data-theme", savedTheme);
  modeToggle.checked = savedTheme === "dark";
};

modeToggle.addEventListener("change", () => {
  const newTheme = modeToggle.checked ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
});
