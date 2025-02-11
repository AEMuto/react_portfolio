import styled from "@emotion/styled";
import { SlideColumn, SlideContainer } from "@components/Slide";
import Heading from "@components/Heading";
import AboutMarkdown from "@data/markdown/about.mdx";
import Typography from "@components/Typography";
import ExternalLink from "@components/ExternalLink";

const StyledTypography = styled(Typography)`
  @media screen and (max-width: 768px) {
    text-align: justify;
    text-justify: auto;
    hyphens: auto;
  }
`;

const About = () => {
  return (
    <SlideContainer id="about">
      <SlideColumn>
        <Heading>
          Quelques mots <br />
          <span data-color="primary">À propos</span> de moi
        </Heading>
      </SlideColumn>
      <SlideColumn>
        <AboutMarkdown components={{
          a: ExternalLink,
          p: StyledTypography,
        }} />
      </SlideColumn>
    </SlideContainer>
  );
};

export default About;
