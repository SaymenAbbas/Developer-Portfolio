const toggleButton = document.getElementById("btn-switch-theme");
// Get's HTML tag
const root = document.documentElement;

function toggleTheme () {
    // gets data-theme from html tag // first time is null
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "light") {
        // removes data-theme="light" on html tag
        root.removeAttribute("data-theme");
        toggleButton.innerHTML =" Light Mode Enable"
    } else {
        root.setAttribute("data-theme", "light")
        toggleButton.innerHTML =" Dark Mode Enable"
    }
}

toggleButton.addEventListener("click", () => {
    toggleTheme();
});