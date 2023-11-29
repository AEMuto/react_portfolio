import {css} from "@emotion/react"
import {colord} from "colord"
import {dark_theme, light_theme} from "./themes"

export const global = css`
  /* Fluid font size variables, for browsers that support clamp */
  @supports (font-size: clamp(1rem, 1vw, 1rem)) {
    :root {
      --font-size-sm: clamp(1.28rem, 0.14vw + 1.23rem, 1.4rem);
      --font-size-md: clamp(1.6rem, 0.37vw + 1.47rem, 1.9rem);
      --font-size-lg: clamp(2rem, 0.73vw + 1.74rem, 2.59rem);
      --font-size-xl: clamp(2.5rem, 1.28vw + 2.05rem, 3.52rem);
      --font-size-xxl: clamp(3.13rem, 2.09vw + 2.39rem, 4.8rem);
      --font-size-xxxl: clamp(3.91rem, 3.28vw + 2.76rem, 6.54rem);
    }
  }
  /* Fallback variables for browsers that don't support clamp */
  @supports not (font-size: clamp(1rem, 1vw, 1rem)) {
    :root {
      --font-size-sm: 1.28rem;
      --font-size-md: 1.6rem;
      --font-size-lg: 2rem;
      --font-size-xl: 2.5rem;
      --font-size-xxl: 3.13rem;
      --font-size-xxxl: 3.91rem;
    }

    @media screen and (min-width: 1152px) {
      :root {
        --font-size-sm: 1.4rem;
        --font-size-md: 1.9rem;
        --font-size-lg: 2.59rem;
        --font-size-xl: 3.52rem;
        --font-size-xxl: 4.8rem;
        --font-size-xxxl: 6.54rem;
      }
    }
  }
	/* Color Variables */
  :root {
    --primary: ${light_theme.primary};
    --primary--hover: ${colord(light_theme.primary).lighten(0.15).toHex()};
    --primary--transparent: ${colord(light_theme.primary).alpha(0.5).toHex()};
    --secondary: ${light_theme.secondary};
    --accent: ${light_theme.accent};
    --danger: ${light_theme.danger};

    --body: ${light_theme.body.base};
    --body--transparent: ${colord(light_theme.body.base).alpha(0.5).toHex()};
    --body--foreground: ${light_theme.body.foreground};
    --body--foreground-transparent: ${colord(light_theme.body.foreground).alpha(0.5).toHex()};
    --body--background: ${light_theme.body.background};
    --body--background-transparent: ${colord(light_theme.body.background).alpha(0.5).toHex()};

    --txt: ${light_theme.text.base};
    --txt--transparent: ${colord(light_theme.text.base).alpha(0.5).toHex()};
    --txt--darker: ${light_theme.text.background};
    --txt--darker-transparent: ${colord(light_theme.text.background).alpha(0.5).toHex()};
    --txt--brighter: ${light_theme.text.foreground};
    --txt--brighter-transparent: ${colord(light_theme.text.foreground).alpha(0.5).toHex()};

    @media screen {
      &[data-theme="dark"] {
        --primary: ${dark_theme.primary};
        --primary--hover: ${colord(dark_theme.primary).lighten(0.1).toHex()};
        --primary--transparent: ${colord(dark_theme.primary).alpha(0.5).toHex()};
        --secondary: ${dark_theme.secondary};
        --accent: ${dark_theme.accent};
        --danger: ${dark_theme.danger};

        --body: ${dark_theme.body.base};
        --body--transparent: ${colord(dark_theme.body.base).alpha(0.5).toHex()};
        --body--foreground: ${dark_theme.body.foreground};
        --body--foreground-transparent: ${colord(dark_theme.body.foreground).alpha(0.5).toHex()};
        --body--background: ${dark_theme.body.background};
        --body--background-transparent: ${colord(dark_theme.body.background).alpha(0.5).toHex()};

        --txt: ${dark_theme.text.base};
        --txt--transparent: ${colord(dark_theme.text.base).alpha(0.5).toHex()};
        --txt--darker: ${dark_theme.text.background};
        --txt--darker-transparent: ${colord(dark_theme.text.background).alpha(0.5).toHex()};
        --txt--brighter: ${dark_theme.text.foreground};
        --txt--brighter-transparent: ${colord(dark_theme.text.foreground).alpha(0.5).toHex()};
      }

      // Additional Themes should be added here
      // &[data-theme="theme-name"] {...}
    }

  }

  html {
    font-family: "acumin-pro", sans-serif;
    font-size: 62.5%; // 1rem = 10px
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: var(--body);
    color: var(--txt);

    & * {
      transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-family: "ivyjournal", sans-serif;
    font-weight: 700;
    margin: 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "acumin-pro-wide", sans-serif;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 1.8rem;
  }

  a {
    color: var(--txt--brighter);
    text-decoration: none;

    &:hover {
      color: var(--primary--hover);
    }
  }
	
	em {
		font-style: normal;
	}

  [data-color="primary"] {
    color: var(--primary);
  }

`
