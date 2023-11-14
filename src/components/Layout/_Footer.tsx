import {AiFillMail, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import styled from "@emotion/styled"

const Footer = () => {
	const year = new Date().getFullYear()
	const size = {size: "3rem"}
	return (
		<StyledFooter className="footer">
			<FooterContent className="footer__content">
				<p>
					&copy; Antoine Marseaud {year}
					<RepoLink href="https://github.com/AEMuto/portfolio">
						Code Source
					</RepoLink>
				</p>
				<p>
					<SocialIcon href="mailto:antoine.marseaud@gmail.com">
						<AiFillMail {...size}/>
					</SocialIcon>
					<SocialIcon href="https://www.linkedin.com/in/antoine-marseaud/" target="_blank">
						<AiFillLinkedin {...size}/>
					</SocialIcon>
					<SocialIcon href="https://github.com/AEMuto" target="_blank">
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

const RepoLink = styled.a`
  margin-left: 1rem;
`

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
`
