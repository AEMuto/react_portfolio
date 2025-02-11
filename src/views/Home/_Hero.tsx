import styled from "@emotion/styled";
import Subheading from "@components/Subheading";
import Heading from "@components/Heading";
import { SlideColumn, SlideContainer } from "@components/Slide";
import Button from "@components/Button";
import { Link } from "react-router-dom";
import Portrait from "@assets/images/me.jpg";
import Typography from "@components/Typography";
import { useLanguage } from "@contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <SlideContainer id="header" isHeader={true}>
      <SlideColumn>
        <Subheading size="lg" bold>
          {t({ fr: "Bonjour Interweb\u00A0!", en: "Hello Interweb!" })}
        </Subheading>
        <Heading size="xxl">
          {t({ fr: "Je m’appelle", en: "My name is" })}
          <br />
          <span data-color="primary">Antoine Marseaud</span>
        </Heading>
        <Typography size="lg">
          {t({
            fr: `Je suis quelqu'un d'enthousiaste qui aime résoudre des problèmes grâce au code. Ma plus grande source de motivation est la construction de solutions performantes, élégantes et facile d'utilisation pour tout le monde.`,
            en: `I am an enthusiastic person who loves solving problems through code. My greatest source of motivation is building performant, elegant solutions that are easy to use for everyone.`,
          })}
        </Typography>
        <Typography size="lg">
          {t({
            fr: (
              <>
                <b>Spécialisé dans le développement web</b>, les dernières technologies que j'ai
                utilisées incluent de manière non-exhaustive&nbsp;:{" "}
                <b>React, Typescript, NodeJS, Vue, Appwrite, MongoDB.</b>
              </>
            ),
            en: (
              <>
                <b>Specialized in web development</b>, the latest technologies I've used include but
                are not limited to: <b>React, Typescript, NodeJS, Vue, Appwrite, MongoDB.</b>
              </>
            ),
          })}
        </Typography>
        <CTAContainer>
          <Link
            to="/#projects"
            title={t({ fr: "Voir mes projets", en: "View Projects" }) as string}>
            <Button>Portfolio</Button>
          </Link>
          <a
            //TODO: ternary for the href (need english and french resume)
            href="https://drive.google.com/file/d/1-FfXA6LFPYDRbya9_Bi5qBTz1xgBWB-_/view?usp=sharing"
            title={t({ fr: "Consulter mon CV", en: "View Resume" }) as string}
            target="_blank"
            rel="noreferrer">
            <Button option="alternate">{t({ fr: "Consulter mon CV", en: "View Resume" })}</Button>
          </a>
        </CTAContainer>
      </SlideColumn>
      <StyledSlideColumn>
        <StyledImg
          src={Portrait}
          alt={t({ fr: "Photo de profil", en: "Profile picture" }) as string}
        />
      </StyledSlideColumn>
    </SlideContainer>
  );
};

export default Hero;

const CTAContainer = styled.div`
  margin-top: clamp(3rem, 3vw, 4rem);
  display: flex;
  gap: 2rem;
  min-width: 352.5px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 100%;
  }
`;

const StyledSlideColumn = styled(SlideColumn)`
  @media (max-width: 768px) {
    display: none;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    background-color: var(--primary);
    z-index: -1;
    transition: background-color 0.3s ease-in-out;
  }
`;

const StyledImg = styled.img`
  align-self: center;
  filter: grayscale(100%);
  border-radius: 50%;
  width: 100%;
  max-width: 300px;
  height: auto;
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }
`;
