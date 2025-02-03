import { HTMLProps, ReactNode, FC } from "react";
import { css } from "@emotion/react";
import { LuExternalLink } from "react-icons/lu";

type ExternalLinkProps = HTMLProps<HTMLAnchorElement> & { children?: ReactNode };

const ExternalLink: FC<ExternalLinkProps> = ({ children, ...rest }) => (
  <a css={[baseStyle]} {...rest} target="_blank" rel="noreferrer">
    {children}&nbsp;
    <LuExternalLink size="var(--font-size-md)" />
  </a>
);

export default ExternalLink;

const baseStyle = css`
  color: var(--primary);
  text-decoration: underline var(--primary) 1px;
  text-underline-offset: 3px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--primary--hover);
    text-decoration: underline var(--primary--hover) 1px;
  }

  svg {
    margin-left: 0.5rem;
    margin-bottom: -0.2rem;
  }
`;
