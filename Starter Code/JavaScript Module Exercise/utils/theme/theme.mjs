/* Create theme.mjs, which exports functions that manage the application's theme. The function setLightTheme and setDarkTheme set and log the theme being set to the console. */
let theme = null;

export const setLightTheme = () =>
{
	console.log("Setting light theme.");
	theme = "light";
};

export const setDarkTheme = () =>
{
	console.log("Setting dark theme.");
	theme = "dark";
}

