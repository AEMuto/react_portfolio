import { css } from '@emotion/react'
import {colord} from "colord"

const styles = css`
  :root {
    --primary: ${colord("#a03f3f").desaturate(0.5).lighten(0.5).toHex()};
    --primary--hover: ${clrTxt}; // Replace with your actual hover adjustment
    --primary--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
    --secondary: ${secondaryLightTheme};
    --accent: ${accentLightTheme};
    --danger: ${dangerLightTheme};

    --body: ${clrBody};
    --body--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
    --body--brighter: ${clrBodyBrighter};
    --body--brighter-transparent: ${clrTxt}; // Replace with your actual transparent adjustment
    --body--darker: ${clrBodyDarker};
    --body--darker-transparent: ${clrTxt}; // Replace with your actual transparent adjustment

    --txt: ${clrTxt};
    --txt--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
    --txt--darker: ${clrTxtDarker};
    --txt--darker-transparent: ${clrTxt}; // Replace with your actual transparent adjustment
    --txt--brighter: ${clrTxtBrighter};
    --txt--brighter-transparent: ${clrTxt}; // Replace with your actual transparent adjustment

    @media screen {
      &[data-theme="dark"] {
        --primary: ${primaryDarkTheme};
        --primary--hover: ${clrTxt}; // Replace with your actual hover adjustment
        --primary--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
        --secondary: ${secondaryDarkTheme};
        --accent: ${accentDarkTheme};
        --danger: ${dangerDarkTheme};

        --body: ${clrTxt};
        --body--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
        --body--brighter: ${clrTxtBrighter};
        --body--brighter-transparent: ${clrTxt}; // Replace with your actual transparent adjustment
        --body--darker: ${clrTxtDarker};
        --body--darker-transparent: ${clrTxt}; // Replace with your actual transparent adjustment

        --txt: ${clrBody};
        --txt--transparent: ${clrTxt}; // Replace with your actual transparent adjustment
        --txt--darker: ${clrBodyDarker};
        --txt--darker-transparent: ${clrTxt}; // Replace with your actual transparent adjustment
        --txt--brighter: ${clrBodyBrighter};
        --txt--brighter-transparent: ${clrTxt}; // Replace with your actual transparent adjustment
      }
    }
  }
	
  html {
    font-family: "acumin-pro", sans-serif;
    font-size: 62.5%;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background-color: var(--body);
    color: var(--txt);
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
    color: unset;
    text-decoration: none;
  }

  .emphasis {
    color: var(--primary);
  }
`;

export default styles;
