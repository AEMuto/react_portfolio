import styled from "@emotion/styled";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <StyledButton
      onClick={handleLanguageChange}
      title={language === "fr" ? "Passer en anglais" : "Switch to French"}
      aria-label={language === "fr" ? "Switch to English" : "Passer en français"}
      type="button">
      <LanguageOption $active={language === "en"}>EN</LanguageOption>
      <Divider>/</Divider>
      <LanguageOption $active={language === "fr"}>FR</LanguageOption>
    </StyledButton>
  );
};

export default LanguageSwitcher;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 1.4rem;
  font-family: "acumin-pro-wide", sans-serif;

  &:hover {
    color: var(--primary--hover);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Divider = styled.span`
  color: var(--txt);
  opacity: 0.5;
  font-weight: 300;
  margin: 0 0.1rem;
`;

const LanguageOption = styled.span<{ $active: boolean }>`
  color: ${(props) => (props.$active ? "var(--primary)" : "var(--txt)")};
  opacity: ${(props) => (props.$active ? 1 : 0.5)};
  font-weight: ${(props) => (props.$active ? 600 : 300)};
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
  text-decoration-color: var(--accent);
  text-decoration-thickness: 0.35rem;
  text-underline-offset: 4px;
  transition: all 0.3s ease;
`;
