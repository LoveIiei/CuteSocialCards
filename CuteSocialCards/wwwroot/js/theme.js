function applyTheme(themeName) {
    // Use a ternary operator for cleaner code.
    document.body.className = themeName ? `theme-${themeName}` : '';
}

function getInitialTheme() {
    // Check localStorage for a saved theme and apply it on load.
    const savedTheme = localStorage.getItem('selectedProfileTheme'); // Use a unique key
    if (savedTheme) {
        applyTheme(savedTheme);
    }
}