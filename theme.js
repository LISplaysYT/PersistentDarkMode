const CSS_STYLESHEET = document.getElementById('theme-css');
const TOGGLE_BTN = document.getElementById('toggle-theme');

if (TOGGLE_BTN) TOGGLE_BTN.addEventListener("click", changeTheme);

function changeTheme () {
  // get current theme
  const oldTheme = getTheme();
  // invert the theme
  let newTheme;

  if (oldTheme === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  localStorage.setItem("theme", newTheme);
  CSS_STYLESHEET.href = `./css/${newTheme}.css`;
}
  
function getTheme () {
  let theme = localStorage.getItem("theme");

  if (theme === null) {
    theme = "dark";
    localStorage.setItem("theme", theme);
  }

  return theme;
}
(() => {
  let theme = getTheme();
  CSS_STYLESHEET.href = `./css/${theme}.css`;
})()