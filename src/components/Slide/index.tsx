import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import type { BaseProps } from "@/types";

type SlideContainerProps = BaseProps<HTMLElement> & {
  children: ReactNode;
  gridStyleProp?: SerializedStyles | false;
  isHeader?: boolean;
};

export const SlideContainer = ({
  children,
  gridStyleProp,
  isHeader = false,
  ...rest
}: SlideContainerProps) => {
  const gridStyle = gridStyleProp
    ? gridStyleProp
    : gridStyleProp === false
    ? null
    : css`
        @media screen and (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        grid-template-columns: 1fr 1fr;
      `;

  return isHeader ? (
    <header css={[containerStyle, gridStyle]} {...rest}>
      {children}
    </header>
  ) : (
    <section css={[containerStyle, gridStyle]} {...rest}>
      {children}
    </section>
  );
};

const containerStyle = css`
  // When the screen width is less than 1152px, the max-width is set to 100vw and the margin is set to 0.
  @media screen and (max-width: 1152px) {
    max-width: 100vw;
    margin: 0;
  }
  margin: 0 auto;
  min-height: calc(100vh - 6.4rem);
  width: 1152px;
  display: grid;
`;

type SlideColumnProps = BaseProps<HTMLDivElement> & {
  children: ReactNode;
};

export const SlideColumn = ({ children, ...rest }: SlideColumnProps) => {
  return (
    <div css={columnStyle} {...rest}>
      {children}
    </div>
  );
};

const columnStyle = css`
  // When the screen is 480px or less
  @media screen and (max-width: 480px) {
    padding: clamp(0rem, 4vw, 2rem);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 2rem;
`;
