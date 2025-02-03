import { css, SerializedStyles } from "@emotion/react";
import { ReactNode } from "react";
import { BaseProps } from "../../types";

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
        grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
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
  @media screen and (max-width: 1152px) {
    max-width: 100vw;
  }
  min-height: calc(100vh - 6.4rem);
  max-width: 1152px;
  margin: 0 auto;
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
  @media screen and (max-width: 480px) {
    padding: clamp(0rem, 4vw, 2rem);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 2rem;
  max-width: 100vw;
`;
