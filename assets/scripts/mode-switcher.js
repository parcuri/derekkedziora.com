let theme = sessionStorage.getItem('theme');
if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	document.getElementById("theme-toggle").innerHTML = "Light Mode";
    } else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
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
	} else if (systemPrefersColorScheme.matches) {
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
	if (theme === null) {
  		if (systemPrefersColorScheme.matches) { 
    		document.getElementById("theme-toggle").innerHTML = "Light Mode";
  		} else {
    	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
  		}
  	}
}

let systemPrefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
prefersColorSchemeListener(systemPrefersColorScheme); 
systemPrefersColorScheme.addListener(prefersColorSchemeListener); 