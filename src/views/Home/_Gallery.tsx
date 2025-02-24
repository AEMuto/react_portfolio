import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SlideColumn, SlideContainer } from "@components/Slide";
import Heading from "@components/Heading";
import { ProjectCard } from "@components/Card";
import { useLanguage } from "@contexts/LanguageContext";
import { useAllProjects } from "@/hooks/useProject";
import Loader from "@/components/Loader";

const Gallery = () => {
  const { t } = useLanguage();
  const {projects, loading, error} = useAllProjects();
  if (loading) return <Loader />;
  if (error || !projects) return <div>Error loading projects</div>;
  return (
    <SlideContainer
      gridStyleProp={css`
        grid-template-columns: 1fr;
      `}
      id="projects">
      <SlideColumn>
        <Heading>
          {t({
            fr: (
              <>
                Mes derniers <br />
                <span data-color="primary">Projets</span>
              </>
            ),
            en: (
              <>
                My latest <br />
                <span data-color="primary">Projects</span>
              </>
            ),
          })}
        </Heading>
        <ProjectsGrid>
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </ProjectsGrid>
      </SlideColumn>
    </SlideContainer>
  );
};

export default Gallery;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-auto-rows: 550px;
  place-items: center;
  gap: 2rem;
  margin: 4rem 0;
`;
