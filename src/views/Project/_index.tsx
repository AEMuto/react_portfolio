import { lazy, Suspense } from "react";
import { Link, useLoaderData } from "react-router-dom";
import styled from "@emotion/styled";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { TProject } from "../../data/projectsData";
import Heading from "../../components/Heading";
import ExternalLink from "../../components/ExternalLink";
import { SlideContainer } from "../../components/Slide";
import Loader from "../../components/Loader";
import HorizontalGallery from "../../components/HorizontalGallery";

const TextContent = lazy(() => import("./TextContent"));

const Project = () => {
  // Data coming from the loader, see router.tsx
  const { current, total } = useLoaderData() as { current: TProject; total: number };
  const { title, markdown, id, urls, pics } = current;

  const picsArray = Object.values(pics ?? {});

  const nextProject = id === total - 1 ? 0 : id + 1;
  const previousProject = id === 0 ? total - 1 : id - 1; // Because total is the length of the array, not the last index

  return (
    <Article>
      <Heading size="xxl">{title}</Heading>
      <HorizontalGallery imgArray={picsArray} title={title} />
      <ExternalLinksContainer>
        {urls.github && (
          <ExternalLink href={urls.github} title="Voir le code source sur Github" target="_blank">
            Github
          </ExternalLink>
        )}
        {urls.live && (
          <ExternalLink href={urls.live} title="Voir le projet en ligne" target="_blank">
            Voir le projet
          </ExternalLink>
        )}
      </ExternalLinksContainer>
      <Suspense fallback={<Loader />}>
        <TextContent markdown={markdown} />
      </Suspense>
      <ProjectNavArrowContainer>
        {/*Next & Prev arrows*/}
        <StyledLink to={`/project/${previousProject}`}>
          <MdOutlineArrowRightAlt size={32} className="back" />
          <span>Précédent</span>
        </StyledLink>
        <StyledLink to={`/project/${nextProject}`}>
          <span>Suivant</span>
          <MdOutlineArrowRightAlt size={32} className="next" />
        </StyledLink>
      </ProjectNavArrowContainer>
    </Article>
  );
};

export default Project;

const StyledLink = styled(Link)`
  min-height: 44px;
`;

const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    font-size: var(--font-size-md);
  }
`;

const ProjectNavArrowContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem 0;

  a {
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-sm);
    line-height: 1;
    position: relative;
    svg {
      transition: transform .28s cubic-bezier(0.075, 0.82, 0.165, 1)
    }

    svg.back {
      transform: rotate(180deg);
    }

    &:hover {
      color: var(--primary--hover);

      svg.back {
        transform: rotate(180deg) translateX(5px);
      }

      svg.next {
        transform: translateX(5px);
      }
    }

    & span {
      transform: translateY(-1px);
    }
  }
`;

const Article = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  max-width: 135ch;
  margin: 0 auto;
  padding: 0 1.6rem;
`;
