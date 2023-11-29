import styled from "@emotion/styled"
import Subheading from "../../components/Subheading"
import Heading from "../../components/Heading"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import {css} from "@emotion/react"
import Button from "../../components/Button"
import {Link} from "react-router-dom"
import Portrait from "../../../assets/images/me.jpg"
import Typography from "../../components/Typography"

const Header = () => {
	return (
		<SlideContainer id="header" isHeader={true}>
			<SlideColumn>
				<Subheading size="lg" bold>
					Bonjour Interweb!
				</Subheading>
				<Heading size="xxl">
					Je m’appelle<br/>
					<span data-color="primary">Antoine Marseaud</span>
				</Heading>
				<Typography size="lg">
					Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce au code. Ma plus grande source de
					motivation est la construction de solutions performantes, élégantes et facile d'utilisation pour tout le
					monde.
				</Typography>
				<Typography size="lg">
					<b>Spécialisé dans le développement web</b>,
					les dernières technologies que j'ai utilisé incluent de manière non-exhaustive
					: <b>React</b>, <b>Typescript</b>, <b>NodeJS</b>, <b>Vue</b>, <b>Appwrite</b>, <b>MongoDB</b>.
				</Typography>
				<CTAContainer>
					<Link to="/#projects" title="Voir mes projets">
						<Button>
							Portfolio
						</Button>
					</Link>
					<a href="/assets/CV_2023.pdf" title="Pour télécharger mon CV" target="_blank" rel="noreferrer">
						<Button option="alternate">
							Télécharger mon CV
						</Button>
					</a>
				</CTAContainer>
			</SlideColumn>
			<StyledSlideColumn>
				<StyledImg src={Portrait} alt="My Portrait"/>
			</StyledSlideColumn>
		</SlideContainer>
	)
}

export default Header

const StyledText = styled.p`
  // Responsive font-size
  font-size: clamp(1.9rem, 2.5vw, 2.5rem); // First version
  // Alternative, problem with this one is that it doesn't stop growing
  //font-size: calc(1.9rem + (24 - 16) * ((100vw - 300px) / (1600 - 300)));
	& + p {
		margin-top: 1rem;
	}
	// Responsive line-height
	//line-height: clamp(1.4, 2vw, 2.5);
	// responsive kerning, smaller screen = more kerning, bigger screen = less kerning
	//letter-spacing: clamp(0.05rem, 0.1vw, -0.2rem);
	
	// From chat gpt-3
  line-height: clamp(1.2, calc(1.4 + 0.1vw), 1.6);
  //letter-spacing: clamp(-0.024rem, calc(0.05rem - 0.02vw), 0rem);
	letter-spacing: clamp(-0.1rem, -1vw, 1rem);
`

const CTAContainer = styled.div`
  margin-top: clamp(3rem, 3vw, 4rem);
  display: flex;
  //flex-wrap: nowrap;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledSlideColumn = styled(SlideColumn)`
  @media (max-width: 768px) {
    display: none;
  }

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
