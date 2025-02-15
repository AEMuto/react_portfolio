declare module "*.mdx" {
  import type { MDXComponents } from "mdx/types";

  let MDXComponent: (props: { components?: MDXComponents }) => JSX.Element;
  export default MDXComponent;
}
