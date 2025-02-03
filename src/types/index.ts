import { DetailedHTMLProps } from "react";

export type BaseProps<T> = DetailedHTMLProps<React.HTMLAttributes<T>, T> & {
  className?: string; // Necessary for styled components. cf: https://emotion.sh/docs/styled#styling-any-component
};
