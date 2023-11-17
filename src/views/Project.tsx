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
	const {tags, markdown} = useLoaderData() as TProject

	return (
		<Layout>
			<SlideContainer>
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
								<Subheading size="medium">
									{rest.children}
								</Subheading>
							)
						},
					}}
				/>

			</SlideContainer>
		</Layout>
	)
}

export default Project
//TODO: Finish styling the markdown
const StyledMarkdown = styled(Markdown)`

  h1, h2, h3, h4, h5, h6 {
    margin: 1rem;
  }

  p {
    margin: 1rem;
    font-size: 2rem;
  }

  pre {
    font-size: 1.6rem;
    max-width: 60%;
  }

`
