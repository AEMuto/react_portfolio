import React, {ReactNode} from "react"
import {css} from "@emotion/react"

type HeadingProps = {
	children: ReactNode
	size?: "lg"	|"xl"	|"xxl"	|"xxxl"
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = ({children, size = "xl", component = "h1"}: HeadingProps) => {

	const style = [baseStyle, sizeSwitch(size)]

	switch (component) {
		case "h1":
			return <h1 css={style}>{children}</h1>
		case "h2":
			return <h2 css={style}>{children}</h2>
		case "h3":
			return <h3 css={style}>{children}</h3>
		case "h4":
			return <h4 css={style}>{children}</h4>
		case "h5":
			return <h5 css={style}>{children}</h5>
		case "h6":
			return <h6 css={style}>{children}</h6>
		default:
			throw new Error("Invalid Component Prop for Heading component")

	}
}

export default Heading

const baseStyle = css`
	text-decoration: underline solid var(--accent);
  text-decoration-skip-ink: none;
`

const sizeSwitch = (size: HeadingProps["size"]) => {
	switch (size) {
		case "xxxl":
			return (css`
				font-size: var(--font-size-xxxl);
        margin: 3rem 0 4rem 0;
        text-decoration-thickness: 2rem;
        text-underline-offset: -.5rem;
        line-height: 1.5;
			`)
		case "xxl":
			return (css`
				font-size: var(--font-size-xxl);
        margin: 2rem 0 3rem 0;
        text-decoration-thickness: 1.5rem;
        text-underline-offset: -.375rem;
        line-height: 1.45;
			`)
		case "xl":
			return (css`
				font-size: var(--font-size-xl);
        margin: 1.75rem 0 2rem 0;
        text-decoration-thickness: 1.125rem;
        text-underline-offset: -.28125rem;
        line-height: 1.4;
			`)
		case "lg":
			return (css`
				font-size: var(--font-size-lg);
				margin: 1.5rem 0 1.75rem 0;
				text-decoration-thickness: .875rem;
				text-underline-offset: -.21875rem;
				line-height: 1.35;
			`)
		default:
			throw new Error("Invalid Size Prop for Heading component")
	}
}
