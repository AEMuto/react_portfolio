import React, {ReactNode} from "react"
import {css} from "@emotion/react"

type HeadingProps = {
	children: ReactNode
	size?: "big" | "medium" | "small"
	component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = ({children, size = "medium", component = "h1"}: HeadingProps) => {

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

const baseStyle = css({
	textDecoration: "underline solid var(--accent)",
	textDecorationSkipInk: "none",
})



const sizeSwitch = (size: HeadingProps["size"]) => {
	switch (size) {
		case "big":
			return (css`font-size: 4.8rem;
        margin-bottom: 4rem;
        text-decoration-thickness: 2rem;
        text-underline-offset: -.5rem;
        line-height: 1.4;`)
		case "medium":
			return (css`font-size: 3.6rem;
        margin-bottom: 3rem;
        text-decoration-thickness: 1.5rem;
        text-underline-offset: -.375rem;
        line-height: 1.3;`)
		case "small":
			return (css`font-size: 2.7rem;
        margin-bottom: 2.25rem;
        text-decoration-thickness: 1.125rem;
        text-underline-offset: -.28125rem;
        line-height: 1.2;`)
		default:
			throw new Error("Invalid Size Prop for Heading component")
	}
}
