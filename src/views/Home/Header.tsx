import styled from "@emotion/styled"
import Subheading from "../../components/Subheading"
import Heading from "../../components/Heading"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import {css} from "@emotion/react"
import Button from "../../components/Button"
import {Link} from "react-router-dom"

const Header = () => {
	return (
		<SlideContainer id="header">
			<SlideColumn>
				<Subheading size="big" bold>
					Bonjour Interweb!
				</Subheading>
				<Heading size="big">
					Je m’appelle<br/>
					<span css={css`color: var(--primary)`}>
							Antoine Marseaud
						</span>
				</Heading>
				<p css={css`font-size: 2.4rem;`}>
					Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce
					au code. Ma plus grande source de motivation est la construction de
					solutions performantes, élégantes et facile d'utilisation pour tout le
					monde.
				</p>
				<div css={css`margin-top: 4rem`}>
					<Link to="/#projects" title="Voir mes projets">
						<Button>
							Portfolio
						</Button>
					</Link>
					<Link to="/#contact" title="Pour me contacter">
						<Button option="alternate">
							Me Contacter
						</Button>
					</Link>
				</div>
			</SlideColumn>
			<StyledSlideColumn>
				<StyledImg src="../../../assets/images/me.jpg" alt="My Portrait"/>
			</StyledSlideColumn>
		</SlideContainer>
	)
}

export default Header

const StyledSlideColumn = styled(SlideColumn)`
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    background-color: var(--primary);
    z-index: -1;
	  transition: background-color .3s ease-in-out;
  }
`

const StyledImg = styled.img`
  align-self: center;
  filter: grayscale(100%);
  border-radius: 50%;
  width: 100%;
  max-width: 300px;
  height: auto;
  transition: filter .3s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`
