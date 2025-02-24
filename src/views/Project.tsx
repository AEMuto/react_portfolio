import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { getTotalProjects } from "@/projects";
import { useProject } from "@hooks/useProject";
import { SlideContainer } from "@components/Slide";
import ExternalLink from "@components/ExternalLink";
import Loader from "@components/Loader";
import Heading from "@components/Heading";
import Typography from "@components/Typography";
import Subheading from "@components/Subheading";
import CodeComponent from "@components/CodeBlock";
import type { Project } from "@projects/utils";

const Project = () => {
  const { id: projectId } = useParams();
  const id = parseInt(projectId ?? "", 10);
  const total = getTotalProjects();
  const { project, loading, error } = useProject(id);
  const Content = project?.content;

  if (loading) return <Loader />;
  if (error || !Content) return <div>Error loading project</div>;

  const nextProject = id === total - 1 ? 0 : id + 1;
  const previousProject = id === 0 ? total - 1 : id - 1; // Because total is the length of the array, not the last index

  return (
    <Article>
      <Content
        components={{
          h1: (props) => <Heading size="xl" {...props} />,
          h2: (props) => <Subheading size="lg" margin="clamp(2rem, 1vw, 3rem) 0" {...props} />,
          p: (props) => <Typography size="md" {...props} />,
          a: ExternalLink,
          ul: (props) => <List {...props} />,
          ol: (props) => <List as="ol" {...props} />,
          li: (props) => <ListItem {...props} />,
          code: CodeComponent,
        }}
      />
      {/**
       * TODO: Extract the navigation arrows into a separate component (will use in a future Blog feature implementation). See also if accessibility is good and meets best practices.
       */}
      <NavArrows>
        <StyledLink to={`/project/${previousProject}`}>
          <MdOutlineArrowRightAlt size={32} className="back" />
          <span>Précédent</span>
        </StyledLink>
        <StyledLink to={`/project/${nextProject}`}>
          <span>Suivant</span>
          <MdOutlineArrowRightAlt size={32} className="next" />
        </StyledLink>
      </NavArrows>
    </Article>
  );
};

export default Project;

const StyledLink = styled(Link)`
  min-height: 44px;
`;

const NavArrows = styled.div`
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
      transition: transform 0.28s cubic-bezier(0.075, 0.82, 0.165, 1);
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
  padding: clamp(0rem, 4vw, 2rem);
  @media (max-width: 768px) {
    p {
      text-align: justify;
      text-justify: auto;
      hyphens: auto;
    }

    li {
      text-align: left;
      text-justify: auto;
    }
  }

  p > em {
    font-style: italic;
  }

  pre {
    font-size: 1.6rem;
    max-width: 120ch;
  }
`;

const List = styled.ul`
  list-style: ${({ as }) => (as === "ol" ? "decimal inside" : "square inside")};
  margin: clamp(0.25rem, 1vw, 2rem) 0;
  padding: 0;
  font-size: 2rem;
`;

const ListItem = styled.li`
  margin: clamp(1rem, 1vw, 2rem) clamp(1.5rem, 1vw, 3rem);
  padding: 0;
  font-size: var(--font-size-md);
  line-height: calc(var(--font-size-md) * 1.25);

  &:nth-of-type(odd)::marker {
    color: var(--primary);
  }

  &:nth-of-type(even)::marker {
    color: var(--accent);
  }
`;
