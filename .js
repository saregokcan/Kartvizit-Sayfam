if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}