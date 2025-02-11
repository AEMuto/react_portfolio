import Hodor from "@projects/hodor/index.mdx";
import ExternalLink from "@components/ExternalLink";
import Heading from "@components/Heading";
import { SlideContainer } from "@components/Slide";
import styled from "@emotion/styled";
import { useLoaderData } from "react-router-dom";
import type { Project } from "@projects/utils";

const HodorView = () => {
  const {current, total} = useLoaderData<{current: Project, total: number}>();
  console.log(current, total);
  return <Hodor
    components={{
      h1: (props) => <Heading size="xxl" {...props} />,
      // a: ExternalLink,
      // p: StyledTypography,
      wrapper: (props) => <Article {...props} />,
    }}
    
  />;
};

export default HodorView;

const Article = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  max-width: 135ch;
  margin: 0 auto;
  padding: 0 1.6rem;
`;