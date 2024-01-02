import React from "react"
import {SlideColumn, SlideContainer} from "../../components/Slide"
import Heading from "../../components/Heading"
import {css} from "@emotion/react"
import projectsData from "../../data/projectsData"
import styled from "@emotion/styled"
import {ProjectCard} from "../../components/Card"

const Gallery = () => {
	return (
		<SlideContainer gridStyleProp={css`grid-template-columns: 1fr;`} id="projects">
			<SlideColumn>
				<Heading>
					Mes derniers <br/>
					<span data-color="primary">Projets</span>
				</Heading>
				<ProjectsGrid>
					{projectsData.map((project) => {
						return (
							<ProjectCard
								key={project.id}
								{...project}
							/>
						)
					})}
				</ProjectsGrid>
			</SlideColumn>
		</SlideContainer>
	)
}

export default Gallery

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 550px;
  place-items: center;
  gap: 2rem;
  margin: 4rem 0;
`
