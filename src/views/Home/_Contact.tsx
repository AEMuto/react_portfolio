import { SlideContainer } from "@components/Slide";
import Button from "@components/Button";
import styled from "@emotion/styled";
import { useLanguage } from "@contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <StyledContainer id="contact" gridStyleProp={false}>
      <Button
        href="mailto:antoine.marseaud@gmail.com"
        title={t({ fr: "Me contacter par mail", en: "Contact me by email" }) as string}>
        {t({
          fr: "Me contacter",
          en: "Contact me",
        })}
      </Button>
    </StyledContainer>
  );
};

export default Contact;

const StyledContainer = styled(SlideContainer)`
  place-items: center;
`;
