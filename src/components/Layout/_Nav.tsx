import {MdBrightness6} from "react-icons/md"
import styled from "@emotion/styled"
import {Link} from "react-router-dom"

const Nav = () => {
	const switchTheme = () => {
		const root = document.documentElement.dataset
		root.theme = root.theme === "dark" ? "light" : "dark"
		// console.log("Theme switched", root.theme)
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
			</NavContent>
		</StyledNav>
	)
}

export default Nav

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
  font-size: 2.6rem;
  line-height: 1.5;
`

const LinksWrapper = styled.div`
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
    font-size: 1.4rem;
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
