import styled from "@emotion/styled"
import Subheading from "../../components/Subheading"
import Heading from "../../components/Heading"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import Button from "../../components/Button"
import {Link} from "react-router-dom"
import Portrait from "../../../assets/images/me.jpg"
import Typography from "../../components/Typography"

const Hero = () => {
	return (
		<SlideContainer id="header" isHeader={true}>
			<SlideColumn>
				<Subheading size="lg" bold>
					Bonjour Interweb&nbsp;!
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
					les dernières technologies que j'ai utilisées incluent de manière non-exhaustive&nbsp;: <b>React,
					Typescript, NodeJS, Vue, Appwrite, MongoDB.</b>
				</Typography>
				<CTAContainer>
					<Link to="/#projects" title="Voir mes projets">
						<Button>
							Portfolio
						</Button>
					</Link>
					<a href="https://drive.google.com/file/d/1NSbV5R4pvD_slBJWzMBxOFqDpsRZ6r1P/view?usp=drive_link" title="Pour consulter mon CV" target="_blank" rel="noreferrer">
						<Button option="alternate">
							Consulter mon CV
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

export default Hero

const CTAContainer = styled.div`
  margin-top: clamp(3rem, 3vw, 4rem);
  display: flex;
  gap: 2rem;
	min-width: 352.5px;
  @media (max-width: 768px) {
    flex-direction: column;
	  min-width: 100%;
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
