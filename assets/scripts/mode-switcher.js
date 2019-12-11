const theme = sessionStorage.getItem('theme');
if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');  
}


let systemDarkThemeSet = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentMode = document.documentElement.getAttribute('data-theme');
	
if (currentMode === null && systemDarkThemeSet) {
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (currentMode === null && systemDarkThemeSet === false) {
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
	} else if (currentMode === null && systemDarkThemeSet === true) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

function prefersColorSchemeListener(systemPrefersColorScheme) {
  if (systemPrefersColorScheme.matches) {
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    document.documentElement.setAttribute('data-theme', 'light');  
  }
}

let systemPrefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
prefersColorSchemeListener(systemPrefersColorScheme); 
systemPrefersColorScheme.addListener(prefersColorSchemeListener); 