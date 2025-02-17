import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useFocusTrap from "@hooks/useFocusTrap";
import wait from "@utils/wait";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Hamburger from "@components/Hamburger";
import LanguageSwitcher from "@components/LanguageSwitcher";
import Divider from "@components/Divider";
import { useLanguage } from "@contexts/LanguageContext";

const Nav = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { containerRef } = useFocusTrap({
    enabled: isMenuOpen,
    onEscape: () => handleMenuClose(),
  });

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleMenuClose = async () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const handleModalLinksClick = async () => {
    await wait(150);
    handleMenuClose();
  };

  return (
    <StyledNav>
      <NavContent>
        <LogoContainer>
          <NavLogo
            to="/#header"
            title={t({ fr: "Retour à l'accueil", en: "Back to Home" }) as string}>
            Antoine M.
          </NavLogo>
        </LogoContainer>
        <LinksDesktopWrapper>
          <LinksList>
            <li>
              <Link
                to="/#about"
                title={
                  t({ fr: "Quelques mots à propos de moi", en: "A few words about me" }) as string
                }>
                {t({ fr: "À Propos", en: "About" })}
              </Link>
            </li>
            <li>
              <Link to="/#projects" title={t({ fr: "Mes travaux", en: "My work" }) as string}>
                {t({ fr: "Projets", en: "Projects" })}
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                title={t({ fr: "Comment me contacter", en: "How to reach me" }) as string}>
                {t({ fr: "Me contacter", en: "Contact" })}
              </Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </LinksList>
        </LinksDesktopWrapper>
        <Hamburger
          isActive={isMenuOpen}
          setIsActive={isMenuOpen ? handleMenuClose : handleMenuOpen}
          tabIndex={isMenuOpen ? -1 : 0}
        />
        <LinksMobileModal
          ref={containerRef}
          className={isMenuOpen ? "active" : ""}
          role="dialog"
          aria-modal="true"
          aria-label={t({ fr: "Menu de navigation", en: "Navigation menu" }) as string}
          id="mobile-menu"
          aria-hidden={!isMenuOpen}>
          <ul>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#about"
                title={
                  t({ fr: "Quelques mots à propos de moi", en: "A few words about me" }) as string
                }
                tabIndex={isMenuOpen ? 0 : -1}>
                {t({ fr: "À Propos", en: "About" })}
              </Link>
            </li>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#projects"
                title={t({ fr: "Mes travaux", en: "My work" }) as string}
                tabIndex={isMenuOpen ? 0 : -1}>
                {t({ fr: "Projets", en: "Projects" })}
              </Link>
            </li>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#contact"
                title={t({ fr: "Comment me contacter", en: "How to reach me" }) as string}
                tabIndex={isMenuOpen ? 0 : -1}>
                {t({ fr: "Me contacter", en: "Contact" })}
              </Link>
            </li>
          </ul>
          <LinksMobileModalHeader>
          <SwitcherContainer>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </SwitcherContainer>
            <Hamburger
              isActive={isMenuOpen}
              setIsActive={handleMenuClose}
              tabIndex={isMenuOpen ? 0 : -1}
              aria-hidden={!isMenuOpen}
            />
          </LinksMobileModalHeader>
        </LinksMobileModal>
      </NavContent>
    </StyledNav>
  );
};

export default Nav;

const SwitcherContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const LinksMobileModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 100dvw;
  background-color: var(--body);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  /* Delay visibility change until after opacity transition when hiding */
  transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
  }

  a {
    font-family: "acumin-pro-wide", monospace;
    font-size: var(--font-size-xl);
  }

  &.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    /* Make visibility change immediate when showing */
    transition: opacity 0.3s ease-in-out, visibility 0s linear;
  }
`;

const LinksMobileModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  max-width: 1152px;
  padding: 0 1.6rem;
`;

const StyledNav = styled.nav`
  height: 6.4rem;
  background-color: var(--body--foreground-transparent);
  position: fixed;
  z-index: 10;
  width: 100%;
  backdrop-filter: blur(4px);
  top: 0;
`;

const NavContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const NavLogo = styled(Link)`
  font-family: "ivyjournal", serif;
  font-size: var(--font-size-lg);
  line-height: 1.5;
`;

const LinksDesktopWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
    pointer-events: none;
  }

  display: flex;
  align-items: center;
  height: 100%;
  pointer-events: auto;
`;

const LinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  gap: 1.75rem;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 0 0.5rem;
  }

  a {
    font-family: "acumin-pro-wide", monospace;
    font-size: var(--font-size-sm);
    letter-spacing: calc((var(--font-size-sm) - 1rem) * 0.1);
    font-weight: 600;
    text-transform: uppercase;
  }

  a:hover {
    &:before {
      transform: translateX(-50%);
      opacity: 1;
    }
  }

  a:before {
    content: "";
    opacity: 0;
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 7rem;
    left: 50%;
    transform: translateX(-999px);
    background-color: var(--accent);
    transition: transform 0.25s ease-in-out, opacity 0.4s ease-in-out;
  }
`;
