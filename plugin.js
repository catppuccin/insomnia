const { makeTheme, themes } = require("./themes/catppuccin.js");

const catppuccinThemes = [
	makeTheme(themes.mocha),
	makeTheme(themes.macchiato),
	makeTheme(themes.frappe),
	makeTheme(themes.latte),
];

module.exports.themes = [...catppuccinThemes];
