const theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
    	document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === "light") {
    	document.documentElement.setAttribute('data-theme', 'light');  
    }


	const systemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	let currentMode = document.documentElement.getAttribute('data-theme');
	
	if (currentMode === null && systemDarkTheme) {
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (currentMode === null && systemDarkTheme === false) {
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (currentMode === "light") {
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}


function modeSwitcher() {
	let currentMode = document.documentElement.getAttribute('data-theme');
	if (currentMode === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else if (currentMode === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (currentMode === null && systemDarkTheme) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}