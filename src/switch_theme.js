const toggleButton = document.getElementById("btn-switch-theme");
// Get's HTML tag
const root = document.documentElement;

function toggleTheme () {
    // gets data-theme from html tag
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "light") {
        // removes data-theme="light" on html tag
        root.removeAttribute("data-theme");
        toggleButton.innerHTML =" <em>Light Mode Enable</em>"
    } else {
        root.setAttribute("data-theme", "light")
        toggleButton.innerHTML =" <em>Dark Mode Enable</em>"
    }
}

toggleButton.addEventListener("click", () => {
    toggleTheme();
});