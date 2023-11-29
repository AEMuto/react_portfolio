import Layout from "../components/Layout"
import React from "react"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism"
import {Link, useLoaderData} from "react-router-dom"
import styled from "@emotion/styled"
import Heading from "../components/Heading"
import {SlideContainer} from "../components/Slide"
import {TProject} from "../data/projectsData"
import Subheading from "../components/Subheading"
import Typography from "../components/Typography"
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Project = () => {
	// Data coming from the loader, see router.tsx
	const {current, total} = useLoaderData() as { current: TProject, total: number }
	const {title, markdown, id, urls} = current

	const nextProject = id === total - 1 ? 0 : id + 1
	const previousProject = id === 0 ? total - 1 : id - 1 // Because total is the length of the array, not the last index

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
				<ProjectNavArrowContainer>
					{/*Next & Prev arrows*/}
					<Link to={`/project/${previousProject}`} >
						<MdOutlineArrowRightAlt size={32} style={{transform: "rotate(180deg)"}}/>
						<span>Précédent</span>
					</Link>
					<Link to={`/project/${nextProject}`} >
						<span>Suivant</span>
						<MdOutlineArrowRightAlt size={32}/>
					</Link>
				</ProjectNavArrowContainer>
			</StyledSlideContainer>
		</Layout>
	)
}

export default Project

const ProjectNavArrowContainer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 2rem 0;
	//gap: 2rem;
	a {
		color: var(--primary);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-sm);
		line-height: 1;
		&:hover {
			color: var(--primary--hover);
    }
		& span {
			transform: translateY(-1px);
		}
  }
	
`

const StyledSlideContainer = styled(SlideContainer)`
  display: flex;
  flex-direction: column;
  max-width: 135ch;
  margin: 0 auto;
  padding: 0 1.6rem;
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
