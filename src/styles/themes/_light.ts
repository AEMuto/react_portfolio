import {ThemeColors} from "./index"
import {black, white, light_theme_colors, dark_theme_colors} from "../_variables"

const _light: ThemeColors = {
	primary: light_theme_colors.blue,
	secondary: light_theme_colors.purple,
	accent: dark_theme_colors.green,
	danger: light_theme_colors.red,
	body: {
		base: white.base,
		foreground: white.brighter,
		background: white.darker,
	},
	text: {
		base: black.base,
		foreground: black.brighter,
		background: black.darker,
	},
}

export default _light
