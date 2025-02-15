import styled from "@emotion/styled";
import Heading from "@components/Heading";
import { useLanguage } from "@contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();
  return (
    <Container>
      <Heading size="xxxl">
        {t({
          fr: (
            <>
              <span data-color="primary">404 </span>
              <br />
              Page non trouvée
            </>
          ),
          en: (
            <>
              <span data-color="primary">404 </span>
              <br />
              Page Not Found
            </>
          ),
        })}
      </Heading>
    </Container>
  );
};

export default NotFound;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 12.8rem);
  text-align: center;
`;
