import { css } from "@emotion/react";
import { ReactNode } from "react";
import { BaseProps } from "../types";

type TypographyProps = BaseProps<HTMLParagraphElement> & {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
};

const Typography = ({ children, size = "md", ...rest }: TypographyProps) => {
  return (
    <p css={[sizeSwitch(size), baseStyle]} {...rest}>
      {children}
    </p>
  );
};

export default Typography;

const baseStyle = css`
  // base style
`;

const sizeSwitch = (size: TypographyProps["size"]) => {
  switch (size) {
    case "xl":
      return css`
        font-size: var(--font-size-xl);
        line-height: calc(var(--font-size-xl) * 1.05);
        & + p {
          margin-top: calc(var(--font-size-xl) * 0.3);
        }
      `;
    case "lg":
      return css`
        font-size: var(--font-size-lg);
        line-height: calc(var(--font-size-lg) * 1.15);
        & + p {
          margin-top: calc(var(--font-size-lg) * 0.3);
        }
      `;
    case "md":
      return css`
        font-size: var(--font-size-md);
        line-height: calc(var(--font-size-md) * 1.25);
        & + p {
          margin-top: calc(var(--font-size-md) * 0.3);
        }
      `;
    case "sm":
      return css`
        font-size: var(--font-size-sm);
        line-height: calc(var(--font-size-sm) * 1.35);
        & + p {
          margin-top: calc(var(--font-size-sm) * 0.3);
        }
      `;
    default:
      throw new Error("Invalid Size Prop for Typography component");
  }
};
