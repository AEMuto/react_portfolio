import styled from "@emotion/styled";
import { SlideColumn, SlideContainer } from "@components/Slide";
import Heading from "@components/Heading";
import { lazy, Suspense } from "react";
import Loader from "@components/Loader";
import Typography from "@components/Typography";
import ExternalLink from "@components/ExternalLink";
import { useLanguage } from "@contexts/LanguageContext";

const StyledTypography = styled(Typography)`
  @media screen and (max-width: 500px) {
    text-align: justify;
    text-justify: auto;
    hyphens: auto;
  }
`;

const FrContent = lazy(() => import("@data/about.fr.mdx"));
const EnContent = lazy(() => import("@data/about.en.mdx"));

const About = () => {
  const { t, language } = useLanguage();
  const Content = language === "fr" ? FrContent : EnContent;
  return (
    <SlideContainer id="about">
      <SlideColumn>
        <Heading>
          {t({
            fr: (
              <>
                Quelques mots <br />
                <span data-color="primary">À propos</span> de moi
              </>
            ),
            en: (
              <>
                A few words <br />
                <span data-color="primary">About</span> me
              </>
            ),
          })}
        </Heading>
      </SlideColumn>
      <SlideColumn>
        <Suspense fallback={<Loader />}>
          <Content
            components={{
              a: ExternalLink,
              p: StyledTypography,
            }}
          />
        </Suspense>
      </SlideColumn>
    </SlideContainer>
  );
};

export default About;
