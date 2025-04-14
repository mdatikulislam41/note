var mode = document.getElementById("mode");
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme == "dark") {
    mode.setAttribute("checked", "checked");
  }
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }
};

mode.addEventListener("change", function () {
  if (this.checked) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
});
