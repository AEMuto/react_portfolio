import {MdBrightness6} from "react-icons/md"
import styled from "@emotion/styled"
import {Link} from "react-router-dom"
import Hamburger from "../Hamburger"
import {useState} from "react"

//TODO: Add a "scroll to top" button?
//TODO: Finish LinksModal and global behavior of Nav in mobile view,
// when clicking the hamburger should make trap focus on the modal
// and prevent scrolling for accessibility reasons

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const switchTheme = () => {
		const root = document.documentElement.dataset
		root.theme = root.theme === "dark" ? "light" : "dark"
		// console.log("Theme switched", root.theme)
	}

	const handleModalLinksClick = () => {
		setIsMenuOpen(false)
	}

	return (
		<StyledNav>
			<NavContent>
				<NavLogo to="/#header" title="Accueil">
					Antoine M.
				</NavLogo>
				<LinksWrapper>
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
					</LinksList>
					<ThemeSwitcher
						title="Changer le thème"
						onClick={switchTheme}
					>
						<MdBrightness6 size="2rem"/>
					</ThemeSwitcher>
				</LinksWrapper>
				<Hamburger
					isActive={isMenuOpen}
					setIsActive={setIsMenuOpen}
				/>
				<LinksModal className={isMenuOpen ? "active" : ""}>
					<ul>
						<li>
							<Link
								onClick={handleModalLinksClick}
								to="/#about"
								title="Quelques mots à propos de moi"
							>
								À Propos
							</Link>
						</li>
						<li>
							<Link
								onClick={handleModalLinksClick}
								to="/#projects"
								title="Mes travaux"
							>
								Projets
							</Link>
						</li>
						<li>
							<Link
								onClick={handleModalLinksClick}
								to="/#contact"
								title="Comment me contacter"
							>
								Me contacter
							</Link>
						</li>
					</ul>
				</LinksModal>
			</NavContent>
		</StyledNav>
	)
}

export default Nav

//TODO: Change the animation of the modal to something more creative
const LinksModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--body);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  //backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  a {
    font-family: "acumin-pro-wide", monospace;
    font-size: 2.6rem;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`

const StyledNav = styled.nav`
  height: 6.4rem;
  background-color: var(--body--foreground-transparent);
  //opacity: 0.9;
  position: fixed;
  z-index: 10;
  width: 100%;
  backdrop-filter: blur(4px);
  top: 0;
`

const NavContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.6rem;
`

const NavLogo = styled(Link)`
  font-family: "ivyjournal", serif;
  font-size: var(--font-size-lg);
  line-height: 1.5;
`

const LinksWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  display: flex;
  align-items: center;
  height: 100%;
`

const LinksList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;

  li {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 2rem;
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
    transition: transform 0.25s ease-in-out,
    opacity 0.4s ease-in-out;
  }
`
const ThemeSwitcher = styled.span`
  cursor: pointer;
  color: var(--primary);
  margin-left: 2rem;

  &:hover {
    color: var(--primary--hover);
  }
`
