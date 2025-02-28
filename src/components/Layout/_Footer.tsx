import { AiFillMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const iconSize = { size: "3rem" };
  return (
    <StyledFooter>
      <FooterContent>
        <StyledText>
          &copy; A. Marseaud {year}
          &nbsp;<span className="bullet">•</span>&nbsp;
          <Link
            to="https://github.com/AEMuto/react_portfolio"
            target="_blank"
            title="Voir le code source de ce site"
            referrerPolicy="no-referrer">
            {t({ fr: "Code Source", en: "Source Code" })}
          </Link>
        </StyledText>
        <SocialIconContainer>
          <SocialIcon to="mailto:antoine.marseaud@gmail.com">
            <AiFillMail {...iconSize} />
          </SocialIcon>
          <SocialIcon
            to="https://www.linkedin.com/in/antoine-marseaud/"
            target="_blank"
            referrerPolicy="no-referrer">
            <AiFillLinkedin {...iconSize} />
          </SocialIcon>
          <SocialIcon to="https://github.com/AEMuto" target="_blank" referrerPolicy="no-referrer">
            <AiFillGithub {...iconSize} />
          </SocialIcon>
        </SocialIconContainer>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;

const StyledText = styled.p`
  display: flex;
  & > a {
    text-decoration: underline solid var(--txt);
    text-decoration-thickness: 1.25px;
    text-underline-offset: 3px;
    &:hover {
      text-decoration-color: var(--primary--hover);
      transition: text-decoration 0.5s ease-in-out;
    }
  }
  @media (max-width: 460px) {
    flex-direction: column;
    & > span.bullet {
      display: none;
    }
  }
`;

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFooter = styled.footer`
  background-color: var(--body--foreground);
  height: 6.4rem;
  display: flex;
  justify-content: center;
  @media (max-width: 460px) {
    height: 9.6rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1152px;
  flex: 1;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.6rem;
`;

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
`;
