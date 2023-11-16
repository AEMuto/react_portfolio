import {AiFillMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import styled from "@emotion/styled"
import {Link} from "react-router-dom"

const Footer = () => {
	const year = new Date().getFullYear()
	const size = {size: "3rem"}
	return (
		<StyledFooter className="footer">
			<FooterContent className="footer__content">
				<p>
					&copy; Antoine Marseaud {year}
					&nbsp;•&nbsp;
					<Link
						to="https://github.com/AEMuto/react_portfolio"
						target="_blank"
					>
						Code Source
					</Link>
				</p>
				<p>
					<SocialIcon to="mailto:antoine.marseaud@gmail.com">
						<AiFillMail {...size}/>
					</SocialIcon>
					<SocialIcon to="https://www.linkedin.com/in/antoine-marseaud/" target="_blank">
						<AiFillLinkedin {...size}/>
					</SocialIcon>
					<SocialIcon to="https://github.com/AEMuto" target="_blank">
						<AiFillGithub {...size}/>
					</SocialIcon>
				</p>
			</FooterContent>
		</StyledFooter>
	)
}

export default Footer

const StyledFooter = styled.footer`
  background-color: var(--body--foreground);
  height: 6.4rem;
  display: flex;
  justify-content: center;
`

const FooterContent = styled.div`
  max-width: 1152px;
  flex: 1;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
  p {
    display: flex;
  }
`

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
`
