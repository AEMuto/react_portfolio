import {ThemeColors} from "./index"
import {black, dark_theme_colors, light_theme_colors, white} from "../_variables"

const _dark: ThemeColors = {
	primary: dark_theme_colors.blue,
	secondary: dark_theme_colors.purple,
	accent: light_theme_colors.green,
	danger: dark_theme_colors.red,
	body: {
		base: black.base,
		foreground: black.brighter,
		background: black.darker,
	},
	text: {
		base: white.base,
		foreground: white.brighter,
		background: white.darker,
	},
}

export default _dark
