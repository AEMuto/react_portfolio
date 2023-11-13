import {MdBrightness6} from "react-icons/md";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__content">
				<a className="nav__logo" href="/#header" title="Accueil">Antoine M.</a>
				<div className="nav__wrapper">
					<ul className="nav__links">
						<li><a href="/#about" title="Quelques mots à propos de moi">À Propos</a>
						</li>
						<li><a href="/#projects" title="Mes travaux">Projets</a></li>
						<li><a href="/#contact" title="Comment me contacter">Me contacter</a>
						</li>
					</ul>
					<span
						className="theme-switcher"
						title="Changer le thème"
					>
						<MdBrightness6 size="2rem"/>
					</span>
				</div>
			</div>
		</nav>
	)
}

export default Nav;
