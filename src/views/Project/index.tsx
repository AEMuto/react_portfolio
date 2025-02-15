import { Suspense } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Loader from "@/components/Loader";
import { SlideContainer } from "@components/Slide";
import { getTotalProjects } from "@/projects";
import type { Project } from "@/projects/utils";
import ExternalLink from "@components/ExternalLink";
import Heading from "@components/Heading";
import Typography from "@components/Typography";
import { useProject } from "@/hooks/useProject";
import Subheading from "@/components/Subheading";
import CodeComponent from "./_CodeBlock";

const Project = () => {
  const {id: projectId} = useParams();
  const id = parseInt(projectId ?? "", 10);
  const total = getTotalProjects();
  const project = useProject(id);
  const Content = project?.content;

  const nextProject = id === total - 1 ? 0 : id + 1;
  const previousProject = id === 0 ? total - 1 : id - 1; // Because total is the length of the array, not the last index
  
  return Content && (
    <Article>
      <Suspense fallback={<Loader />}>
        <Content
          components={{
            h1: (props) => <Heading size="xl" {...props} />,
            h2: (props) => <Subheading size="lg" margin="2rem 0" {...props} />,
            p: (props) => <Typography size="md" {...props} />,
            a: ExternalLink,
            ul: (props) => <List {...props} />,
            ol: (props) => <List as="ol" {...props} />,
            li: (props) => <ListItem {...props} />,
            wrapper: (props) => <Article {...props} />,
            code: CodeComponent
          }}
        />
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

const List = styled.ul`
  list-style: ${({ as }) => (as === "ol" ? "decimal inside" : "square inside")};
  margin: 2rem 0;
  padding: 0;
  font-size: 2rem;
`;

const ListItem = styled.li`
  margin: 1rem 2rem;
  padding: 0;
  font-size: var(--font-size-md);

  &:nth-of-type(odd)::marker {
    color: var(--primary);
  }

  &:nth-of-type(even)::marker {
    color: var(--accent);
  }
`;