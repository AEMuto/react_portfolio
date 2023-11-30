import React from "react"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import Heading from "../../components/Heading"
import styled from "@emotion/styled"
import AboutMarkdown from "../../data/markdown/about.md"
import Markdown from "react-markdown"
import Typography from "../../components/Typography"
import ExternalLink from "../../components/ExternalLink"



const About = () => {
	return (
		<SlideContainer id="about">
			<SlideColumn>
				<Heading>
					Quelques mots <br/>
					<span data-color="primary">À propos</span> de moi
				</Heading>
			</SlideColumn>
			<SlideColumn>
				<StyledMarkdown
					children={AboutMarkdown}
					components={{
						a: ExternalLink,
						p({node, ...props}) {
							return <Typography {...props}>{props.children}</Typography>
						}
				}}/>
			</SlideColumn>
		</SlideContainer>
	)
}

export default About


const StyledMarkdown = styled(Markdown)`
  @media screen and (max-width: 768px) {
    p {
      text-align: justify;
      text-justify: auto;
      hyphens: auto;
    }

    li {
      text-align: justify;
      text-justify: auto;
    }
  }
`
