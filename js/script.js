/**
 * @copyright Azrod64 2024
 * @author <moisan.romuald@gmail.com>
 */

"use strict"; 

/* Light & dark mode */

const $themeBTN = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if(sessionStorage.getItem('theme')) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme)
}

$themeBTN.addEventListener("click", changeTheme);