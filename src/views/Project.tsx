import Layout from "../components/Layout"
import React from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism"
import {useLoaderData} from "react-router-dom"
import styled from "@emotion/styled"
import Heading from "../components/Heading"
import {SlideContainer} from "../components/Slide"
import {TProject} from "../data/projectsData"
import Subheading from "../components/Subheading"
import Typography from "../components/Typography"

const Project = () => {
	// Data coming from the loader, see router.tsx
	const {tags, markdown, title, urls} = useLoaderData() as TProject

	return (
		<Layout>
			<StyledSlideContainer>
				<Heading size="xxl">
					{title}
				</Heading>
				{/**
				 TODO:Add a next and previous project button & links
				 */}
				<StyledMarkdown
					children={markdown}
					remarkPlugins={[[remarkGfm]]}
					components={{
						code({ref, children, style, className, node, ...rest}) {
							const match = /language-(\w+)/.exec(className || "")
							console.log("match", match)
							return match ? (
								<SyntaxHighlighter
									showLineNumbers={true}
									//showInlineLineNumbers={true}
									language={match[1]}
									PreTag="div"
									{...rest}
									style={oneDark}
								>
									{/*{String(children).replace(/\n$/, "")}*/}
									{String(children)}
								</SyntaxHighlighter>
							) : (
								<code {...rest} className={className}>
									{children}
								</code>
							)
						},
						p({node, ...rest}) {
							return (
								<Typography size="md">
									{rest.children}
								</Typography>
							)
						},
						h1({node, ...rest}) {
							return (
								<Heading size="xl">
									{rest.children}
								</Heading>
							)
						},
						h2({node, ...rest}) {
							return (
								<Subheading size="lg" margin="2rem 0">
									{rest.children}
								</Subheading>
							)
						},
						ul({node, ...rest}) {
							return (
								<List>
									{rest.children}
								</List>
							)
						},
						ol({node, ...rest}) {
							return (
								<List as="ol">
									{rest.children}
								</List>
							)
						},
						li({node, ...rest}) {
							return (
								<ListItem>
									{rest.children}
								</ListItem>
							)
						},
					}}
				/>

			</StyledSlideContainer>
		</Layout>
	)
}

export default Project

const StyledSlideContainer = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  max-width: 135ch;
  margin: 0 auto;
  padding: 0 1.6rem 5rem 1.6rem;
`

const List = styled.ul`
  list-style: ${({as}) => as === "ol" ? "decimal" : "square"};
  list-style-position: inside;
  margin: 2rem 0;
  padding: 0;
  font-size: 2rem;
`

const ListItem = styled.li`
  margin: 1rem 2rem;
  padding: 0;
	font-size: var(--font-size-md);
  &:nth-child(odd)::marker {
    color: var(--primary);
  }

,
&: nth-child(even):: marker {
  color: var(--accent);
}
`

const StyledMarkdown = styled(Markdown)`
  pre {
    font-size: 1.6rem;
    max-width: 120ch;
  }
`
