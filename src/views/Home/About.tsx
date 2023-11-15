import {SlideColumn, SlideContainer} from "../../components/Slide"
import Heading from "../../components/Heading"
import {css} from "@emotion/react"
import styled from "@emotion/styled"

const About = () => {
	return (
		<SlideContainer id="about">
			<SlideColumn>
				<Heading>
					Quelques mots <br/>
					<span css={css`color: var(--primary)`}>À propos</span> de moi
				</Heading>
			</SlideColumn>
			<SlideColumn>
				<StyledText>
					Ancien élève des Arts Décoratifs, j'ai une appétence certaine pour le
					design graphique, qui inclue également la programmation informatique et
					plus particulièrement le langage javascript. J'ai toujours été fasciné
					par le fait que l'on puisse faire vivre les pixels sur nos écrans en
					donnant des instructions à un ordinateur, et le web est un terrain fantastique
					pour y conduire et partager ce genre d'expérimentations.
				</StyledText>
				<br/>
				<StyledText>
					Passionné par le numérique et l'informatique, je suis à l'origine
					autodidacte dans ce domaine. Souhaitant valider les compétences qui y
					sont liés et me spécialiser en fonction de mes expériences précédentes,
					j'ai récemment obtenu avec succès une certification diplômante de
					développeur Front-End chez Openclassrooms.
				</StyledText>
				<br/>
				<StyledText>
					Grâce à cette formation et aux conseils de mon mentor David, j'ai pu
					améliorer ma compréhension des standards actuels attendu dans une
					application web. Les projets que j'ai réalisé durant cette période ont
					été l'occasion pour moi d'apprendre à écrire du code maintenable et
					facile à comprendre. Aussi, j'y ai acquis des bases en sciences
					informatiques et dans les concepts propre au développement web.
				</StyledText>
				<br/>
				<StyledText>
					Sachant que dans ce secteur les technologies évoluent rapidement, je
					dédie beaucoup de mon temps libre à améliorer mes connaissances et je
					cherche toujours à les mettre en pratique à travers des mises en
					situations réels et concrètes.
				</StyledText>
				<br/>
				<StyledText>
					Actuellement, je recherche un emploi de développeur Front-End où je
					pourrais aider une entreprise à atteindre ses objectifs.
				</StyledText>
			</SlideColumn>
		</SlideContainer>
	)
}

export default About

const StyledText = styled.p`
	font-size: 1.8rem;
	margin-bottom: 2rem;
`
