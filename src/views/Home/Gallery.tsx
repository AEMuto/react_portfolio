import React from "react"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import Heading from "../../components/Heading"
import {css} from "@emotion/react"

const Gallery = () => {
	return (
		<SlideContainer>
			<SlideColumn>

			</SlideColumn>
			<SlideColumn>
				<Heading>
					Mes derniers <br/>
					<span css={css`color:var(--primary)`}>Projets</span>
				</Heading>
			</SlideColumn>
		</SlideContainer>
	)
}

export default Gallery
