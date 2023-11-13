const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="header__column">
					<p className="subtitle">Bonjour Interweb!</p>
					<h1>
						Je m’appelle<br/>
						<span className="emphasis">Antoine Marseaud</span>
					</h1>
					<p className="header__info">
						Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce
						au code. Ma plus grande source de motivation est la construction de
						solutions performantes, élégantes et facile d'utilisation pour tout le
						monde.
					</p>
					<div className="header__cta">
						<a href="/#projects" title="Voir mes projets">
							<button className="primary">Portfolio</button>
						</a>
						<a href="/#contact" title="Pour me contacter">
							<button className="alternate">Me Contacter</button>
						</a>
					</div>
				</div>

				<div className="header__column">
					<img className="header__img"
					     src="../../../assets/images/me.jpg"
					     alt="My Portrait" />
				</div>
			</div>
		</header>
	)
}

export default Header;
