import {AiFillMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
	const year = new Date().getFullYear();
	const size = {size:"3rem"}
	return (
		<footer className="footer">
			<div className="footer__content">
				<p>
					&copy; Antoine Marseaud {year}
					<a href="https://github.com/AEMuto/portfolio"
					   className="footer__repo-link">
						Code Source
					</a>
				</p>
				<p>
					<a href="mailto:antoine.marseaud@gmail.com"
					   className="footer__social-icon">
						<AiFillMail {...size}/>
					</a>
					<a href="https://www.linkedin.com/in/antoine-marseaud/"
					   target="_blank"
					   className="footer__social-icon">
						<AiFillLinkedin {...size}/>
					</a>
					<a href="https://github.com/AEMuto"
					   target="_blank"
					   className="footer__social-icon">
						<AiFillGithub {...size}/>
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer;
