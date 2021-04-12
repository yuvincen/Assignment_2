//Toggling Dark Mode
function toggle_dark_mode() {
    var app = document.getElementsByTagName("body")[0];
    if (localStorage.darkMode == "dark") {
        localStorage.darkMode = "light";
        app.setAttribute("dark-mode", "light");
    } else {
        localStorage.darkMode = "dark";
        app.setAttribute("dark-mode", "dark");a
    }
}
