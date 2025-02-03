import _dark from "./_dark";
import _light from "./_light";

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  danger: string;
  body: {
    base: string;
    background: string;
    foreground: string;
  };
  text: {
    base: string;
    background: string;
    foreground: string;
  };
};

export const dark_theme = _dark;
export const light_theme = _light;
