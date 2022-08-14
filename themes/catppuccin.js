const { colors } = require("../utils/colors");
const { capitalize } = require("../utils/helpers");

const themes = {
	mocha: "mocha",
	macchiato: "macchiato",
	frappe: "frappe",
	latte: "latte",
};

const makeTheme = (theme) => {
	return {
		name: `catppuccin-${theme}`,
		displayName: `Catppuccin ${capitalize(theme)}`,
		theme: {
			background: {
				default: colors[`${theme}-base`], // primary background color: ;
				success: colors[`${theme}-green`], // POST request, 200 OK, parameter names
				notice: colors[`${theme}-yellow`], // PATCH request
				warning: colors[`${theme}-lavender`], // PUT request
				danger: colors[`${theme}-red`], // DELETE request
				surprise: colors[`${theme}-mauve`], // accent (Dashboard link, GET request,
				// SEND button, branch button, add plugin button)
				info: colors[`${theme}-sapphire`], // OPTIONS AND HEAD request
			},
			foreground: {
				default: colors[`${theme}-text`], // primary font color
				success: colors[`${theme}-surface0`], // secondary font color for success background: ;
				notice: colors[`${theme}-text`], // secondary font color for notice background
				warning: colors[`${theme}-surface0`], // secondary font color for warning background
				danger: colors[`${theme}-surface0`], // secondary font color for danger background
				surprise: colors[`${theme}-text`], // secondary font color for surprise background
				info: colors[`${theme}-red`], // secondary font color for info background
			},
			highlight: {
				default: colors[`${theme}-overlay2`], // sidebar highlight color
			},
			// The styles object targets sub-components of the Insomnia application.
			styles: {
				appHeader: {
					foreground: {
						surprise: colors[`${theme}-surface0`], // header branch button font color
					},
				},
				paneHeader: {
					foreground: {
						surprise: colors[`${theme}-base`], // pane accent font color
						info: colors[`${theme}-text`], // pane response font color
					},
				},
				sidebar: {
					background: {
						default: colors[`${theme}-mantle`], // sidebar background color
					},
				},
				dialog: {
					background: {
						default: colors[`${theme}-base`], // modal primary background color
					},
				},
			},
		},
	};
};

module.exports = {
	themes,
	makeTheme,
};
