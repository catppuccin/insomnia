module.exports = {
    name: "catppuccin",
    displayName: "Catppuccin",
    theme: {
        background: {
            default: "#1E1E2E", // primary background color
            success: "#ABE9B3", // POST request, 200 OK, parameter names
            notice: "#FAE3B0", // PATCH request
            warning: "#F8BD96", // PUT request
            danger: "#F28FAD", // DELETE request
            surprise: "#DDB6F2", // accent (Dashboard link, GET request,
            // SEND button, branch button, add plugin button)
            info: "#96CDFB", // OPTIONS and HEAD request
        },
        foreground: {
            default: "#D9E0EE", // primary font color
            success: "#1A1826", // secondary font color for success background
            notice: "#1A1826", // secondary font color for notice background
            warning: "#1A1826", // secondary font color for warning background
            danger: "#1A1826", // secondary font color for danger background
            surprise: "#1A1826", // secondary font color for surprise background
            info: "#1A1826", // secondary font color for info background		},
        },
        highlight: {
            default: "#6E6C7E",
        },
        styles: {
            sidebar: {
                background: {
                    default: "#1A1826",
                },
            },
            dialog: {
                background: {
                    default: "#161320",
                },
            },
            transparentOverlay: {
                background: {
                    default: "rgba(30, 30, 46, 0.5)",
                },
            },
        },
    },
};
