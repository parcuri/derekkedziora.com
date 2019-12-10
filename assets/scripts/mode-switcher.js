const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentMode = document.documentElement.getAttribute('data-theme');
	
	if (currentMode === null && systemDarkTheme) {
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
	} else if (currentMode === null && systemDarkTheme === false) {
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
	} else if (currentMode === "dark") {
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (currentMode === "light") {
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}


function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		window.localStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		window.localStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}