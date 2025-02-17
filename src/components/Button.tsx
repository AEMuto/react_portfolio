import { ReactNode } from "react";
import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

// Common props shared between all variants
type CommonProps = {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  option?: "primary" | "alternate";
  className?: string;
  "aria-label"?: string;
  customCss?: SerializedStyles;
};

// Create a base Link component that properly extends RouterLink
const Link = styled(RouterLink)`
  text-decoration: none;
  display: inline-block;
`;

// Props for each variant
type ButtonElementProps = CommonProps & {
  href?: never;
  to?: never;
  onClick?: () => void;
};

type AnchorElementProps = CommonProps & {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
  title?: string;
};

type RouterLinkElementProps = CommonProps & {
  to: string;
  href?: never;
  title?: string;
};

export type ButtonProps = ButtonElementProps | AnchorElementProps | RouterLinkElementProps;

const Button = ({ children, size = "md", option = "primary", customCss, ...rest }: ButtonProps) => {
  const styles = [customCss, baseStyle, sizeSwitch(size), option === "primary" ? primaryStyle : alternateStyle];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === " ") {
      e.preventDefault(); // Prevent page scroll
      e.currentTarget.click();
    }
  };

  // Router Link
  if ("to" in rest && rest.to) {
    const { to, title, ...linkRest } = rest as RouterLinkElementProps;
    return (
      <Link to={to} css={styles} title={title} onKeyDown={handleKeyDown} {...linkRest}>
        {children}
      </Link>
    );
  }

  // Regular anchor
  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorElementProps;
    return (
      <a href={href} css={styles} onKeyDown={handleKeyDown} {...anchorRest}>
        {children}
      </a>
    );
  }

  // Button
  return (
    <button type="button" css={styles} {...rest}>
      {children}
    </button>
  );
};

export default Button;

const baseStyle = css`
  font-family: acumin-pro, sans-serif;
  font-weight: 600;
  padding: 1rem 1.6rem;
  border-radius: 0.5rem;
  border: solid 2px var(--txt);
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;

const sizeSwitch = (size: ButtonProps["size"]) => {
  switch (size) {
    case "xl":
      return css`
        font-size: var(--font-size-xl);
        letter-spacing: calc(var(--font-size-xl) * 0.03);
      `;
    case "lg":
      return css`
        font-size: var(--font-size-lg);
        letter-spacing: calc(var(--font-size-lg) * 0.04);
      `;
    case "md":
      return css`
        font-size: var(--font-size-md);
        letter-spacing: calc(var(--font-size-md) * 0.05);
      `;
    case "sm":
      return css`
        font-size: var(--font-size-sm);
        letter-spacing: calc(var(--font-size-sm) * 0.06);
      `;
    default:
      throw new Error("Invalid Size Prop for Button component");
  }
};

const primaryStyle = css`
  border: solid 2px var(--primary);
  background-color: var(--primary);
  color: var(--body);

  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`;

const alternateStyle = css`
  border: solid 2px var(--primary);
  background-color: transparent;
  color: var(--primary);

  &:hover {
    background-color: var(--primary);
    color: var(--body);
  }
`;
