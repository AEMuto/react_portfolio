export const breakpoints = {
	sm: "640px",
	md: "800px",
	lg: "1024px",
	xl: "1280px",
}

export const black = {
	darker: "#22373F",
	base: "#2C4751",
	brighter: "#365663",
}

export const white = {
	darker: "#CDDDE4",
	base: "#E0EAEE",
	brighter: "#F2F6F8",
}

// Accessible Colors on Light Background
// font-size >= 14pt && font-weight >= 700 || font-size >= 18pt
export const light_theme_colors = {
	purple: "#7652ce",
	blue: "#3462d6",
	red: "#cd2416",
	orange: "#D45100",
	green: "#0a7b28",
}

// Accessible Colors on Dark Background
export const dark_theme_colors = {
	purple: "#D7B7FF", // Works for any text on dark background
	blue: "#87CBFF", // Works for any text on dark background
	red: "#FF7F7A", // font-size >= 14pt && font-weight >= 700 || font-size >= 18pt
	orange: "#FFA870", // font-size >= 14pt && font-weight >= 700 || font-size >= 18pt
	yellow: "#FFD166", // Works for any text on dark background
	green: "#9AD0C4", // Works for any text on dark background
}
