import {SlideColumn, SlideContainer} from "../../components/Slide"
import Heading from "../../components/Heading"
import {css} from "@emotion/react"
import styled from "@emotion/styled"
import AboutMarkdown from "../../data/markdown/about.md"
import Markdown from "react-markdown"
import React, {HTMLProps, ReactNode} from "react"

type ExternalLinkProps = HTMLProps<HTMLAnchorElement> & { children?: ReactNode }

const ExternalLink: React.FC<ExternalLinkProps> = ({children, ...rest}) => (
	<a {...rest} target="_blank" rel="noreferrer"> {children} </a>
)

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
					components={{a: ExternalLink}}
				/>
			</SlideColumn>
		</SlideContainer>
	)
}

export default About


const StyledMarkdown = styled(Markdown)`
  p {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  a {
    color: var(--primary);

    &:hover {
      color: var(--primary--hover);
    }
  }
`
