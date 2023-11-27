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

const Project = () => {
	// Data coming from the loader, see router.tsx
	const {tags, markdown, title, urls} = useLoaderData() as TProject

	return (
		<Layout>
			<StyledSlideContainer>
				<Heading size="big">
					{title}
				</Heading>
				{/**
				 TODO:Add a next and previous project button
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
						h1({node, ...rest}) {
							return (
								<Heading size="big">
									{rest.children}
								</Heading>
							)
						},
						h2({node, ...rest}) {
							return (
								<Subheading size="medium" margin="2rem 0">
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
  padding: 1.6rem;
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

  &:nth-child(odd)::marker {
    color: var(--primary);
  }

,
&: nth-child(even):: marker {
  color: var(--accent);
}
`

//TODO: Finish styling the markdown
const StyledMarkdown = styled(Markdown)`
  

  p {
    font-size: 2rem;
    margin: 1.4rem 0;
    line-height: 1.19;
  }

  pre {
    font-size: 1.6rem;
    max-width: 120ch;
  }

`
