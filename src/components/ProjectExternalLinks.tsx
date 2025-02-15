import { FC } from "react";
import styled from "@emotion/styled";
import type { ProjectMetadata } from "@projects/utils";
import ExternalLink from "./ExternalLink";
import { useLanguage } from "@/contexts/LanguageContext";

type ExternalLinksProps = Pick<ProjectMetadata, "urls">;

const ProjectExternalLinks: FC<ExternalLinksProps> = ({ urls }) => {
  const { t } = useLanguage();
  return (
    <ExternalLinksContainer>
      {urls.live && (
        <ExternalLink
          href={urls.live}
          title={t({ fr: "Voir en ligne", en: "See online" }) as string}
          target="_blank">
          {t({ fr: "Voire en ligne", en: "See online" })}
        </ExternalLink>
      )}
      {urls.github && (
        <ExternalLink
          href={urls.github}
          title={t({ fr: "Voir le code source", en: "See source code" }) as string}
          target="_blank">
          {t({ fr: "Code source", en: "Source code" })}
        </ExternalLink>
      )}
    </ExternalLinksContainer>
  );
};

export default ProjectExternalLinks;

const ExternalLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 2rem;

  a {
    font-size: var(--font-size-md);
  }
`;
