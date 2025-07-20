const toggleButton = document.getElementById("btn-switch-theme");
// Get's HTML tag
const root = document.documentElement;

// Changes the mode based on what's stored in localStorage

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    root.setAttribute('data-theme', 'light');
    toggleButton.innerHTML = 'Dark Mode Enable';
} else {
    root.removeAttribute('data-theme');
    toggleButton.innerHTML = 'Light Mode Enable';
}

function toggleTheme () {
    // gets data-theme from html tag // first time is null
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "light") {
        // removes data-theme="light" on html tag
        root.removeAttribute("data-theme");
        toggleButton.innerHTML =" Light Mode Enable";
        // Creates/Sets a item in the localStorage key: theme, value: dark
        localStorage.setItem('theme', 'dark');
    } else {
        root.setAttribute("data-theme", "light");
        // FIXED: Issue where the switch in light mode keeps transition when switching pages
        toggleButton.classList.add('theme-animated')
        toggleButton.innerHTML =" Dark Mode Enable";
        localStorage.setItem('theme', 'light')
    }
}

toggleButton.addEventListener("click", () => {
    toggleTheme();
});