import {Theme} from "./index"
import {colord} from "colord"
import {black,white,light_theme_colors, dark_theme_colors} from "../_variables"

const _light: Theme = {
	primary: {
		base: light_theme_colors.blue,
		hover: string,
		transparent: string,
	},
	secondary: {
		base: light_theme_colors.purple,
		hover: string,
		transparent: string,
	},
	accent: {
		base: dark_theme_colors.green,
		hover: string,
		transparent: string,
	},
	danger: {
		base: light_theme_colors.red,
		hover: string,
		transparent: string,
	},
	body: {
		base: white.base,
		transparent: string,
		brighter: white.brighter,
		brighter_transparent: string,
		darker: white.darker,
		darker_transparent: string,
	},
	text: {
		base: black.base,
		transparent: string,
		brighter: black.brighter,
		brighter_transparent: string,
		darker: black.darker,
		darker_transparent: string,
	},
}

export default _light
