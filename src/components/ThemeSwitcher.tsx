import { useRef, useState } from "react";
import { MdBrightness6 } from "react-icons/md";
import styled from "@emotion/styled";
import { useLanguage } from "@contexts/LanguageContext";

const ThemeSwitcher = () => {
  const { t, language } = useLanguage();
  const rootRef = useRef(document.documentElement);
  const root = rootRef.current.dataset;
  const [currentTheme, setCurrentTheme] = useState(root.theme);

  const switchTheme = () => {
    root.theme = root.theme === "dark" ? "light" : "dark";
    setCurrentTheme(root.theme);
  };

  const translation = {
    dark: { fr: "sombre", en: "dark" },
    light: { fr: "clair", en: "light" },
  };

  return (
    <Container >
      <StyledThemeSwitcher
        language={language}
        type="button"
        onClick={switchTheme}
        aria-label={`Switch to ${currentTheme === "dark" ? "light" : "dark"} theme`}>
        <MdBrightness6 aria-hidden="true" />
        <span>{currentTheme === "dark" ? t(translation.light) : t(translation.dark)}</span>
      </StyledThemeSwitcher>
    </Container>
  );
};

export default ThemeSwitcher;

const Container = styled.div`
  width: 20ch;
  display: flex;
`;

const StyledThemeSwitcher = styled.button<{ language: string }>`
  cursor: pointer;
  color: var(--primary);
  background: none;
  display: flex;
  flex: 0;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--primary);
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.08rem;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    color: var(--primary--hover);
    border-color: var(--primary--hover);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  svg {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  span {
    min-width: ${({ language }) => (language === "fr" ? "4.5ch" : "3.5ch")};
    text-align: left;
    text-transform: capitalize;
  }
`;
