import { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useFocusTrap from "@hooks/useFocusTrap";
import wait from "@utils/wait";
import ThemeSwitcher from "@components/ThemeSwitcher";
import Hamburger from "@components/Hamburger";
import LanguageSwitcher from "@components/LanguageSwitcher";
import Divider from "@components/Divider";

const Nav = () => {
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
          <NavLogo to="/#header" title="Accueil">
            Antoine M.
          </NavLogo>
        </LogoContainer>
        <LinksDesktopWrapper>
          <LinksList>
            <li>
              <Link to="/#about" title="Quelques mots à propos de moi">
                À Propos
              </Link>
            </li>
            <li>
              <Link to="/#projects" title="Mes travaux">
                Projets
              </Link>
            </li>
            <li>
              <Link to="/#contact" title="Comment me contacter">
                Me contacter
              </Link>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
            <li>
              <Divider />
            </li>
            <li>
              <LanguageSwitcher />
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
          aria-label="Menu de Navigation"
          id="mobile-menu"
          aria-hidden={!isMenuOpen}>
          <ul>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#about"
                title="Quelques mots à propos de moi"
                tabIndex={isMenuOpen ? 0 : -1}>
                À Propos
              </Link>
            </li>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#projects"
                title="Mes travaux"
                tabIndex={isMenuOpen ? 0 : -1}>
                Projets
              </Link>
            </li>
            <li>
              <Link
                onClick={handleModalLinksClick}
                to="/#contact"
                title="Comment me contacter"
                tabIndex={isMenuOpen ? 0 : -1}>
                Me contacter
              </Link>
            </li>
          </ul>
          <LinksMobileModalHeader>
            <ThemeSwitcher />
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
  justify-content: flex-end;
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
    // remove interactivity, no screen reader
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
