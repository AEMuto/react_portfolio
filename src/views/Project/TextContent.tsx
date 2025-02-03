import { lazy, Suspense } from "react";
import remarkGfm from "remark-gfm";
import ExternalLink from "../../components/ExternalLink";
import Typography from "../../components/Typography";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import styled from "@emotion/styled";
import Markdown from "react-markdown";
import Loader from "../../components/Loader";

const CodeComponent = lazy(() => import("./CodeBlock"));

type TTextContent = {
  markdown?: string;
};

const TextContent = ({ markdown }: TTextContent) => {
  if (!markdown) return <Loader />;
  return (
    <StyledMarkdown
      children={markdown}
      remarkPlugins={[[remarkGfm]]}
      components={{
        a: ExternalLink,
        code: ({ ...rest }) => (
          <Suspense fallback={<Loader />}>
            <CodeComponent {...rest} />
          </Suspense>
        ),
        p: ({ node, ...rest }) => <Typography size="md">{rest.children}</Typography>,
        h1: ({ node, ...rest }) => <Heading size="xl">{rest.children}</Heading>,
        h2: ({ node, ...rest }) => (
          <Subheading size="lg" margin="2rem 0">
            {rest.children}
          </Subheading>
        ),
        ul: ({ node, ...rest }) => <List>{rest.children}</List>,
        ol: ({ node, ...rest }) => <List as="ol">{rest.children}</List>,
        li: ({ node, ...rest }) => <ListItem>{rest.children}</ListItem>,
      }}
    />
  );
};

export default TextContent;

const List = styled.ul`
  list-style: ${({ as }) => (as === "ol" ? "decimal inside" : "square inside")};
  margin: 2rem 0;
  padding: 0;
  font-size: 2rem;
`;

const ListItem = styled.li`
  margin: 1rem 2rem;
  padding: 0;
  font-size: var(--font-size-md);

  &:nth-of-type(odd)::marker {
    color: var(--primary);
  }

  &:nth-of-type(even)::marker {
    color: var(--accent);
  }
`;

const StyledMarkdown = styled(Markdown)`
  @media (max-width: 768px) {
    p {
      text-align: justify;
      text-justify: auto;
      hyphens: auto;
    }

    li {
      text-align: justify;
      text-justify: auto;
    }
  }

  p > em {
    font-style: italic;
  }

  pre {
    font-size: 1.6rem;
    max-width: 120ch;
  }
`;
