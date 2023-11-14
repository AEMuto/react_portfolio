import {ReactNode} from "react"
import {css} from "@emotion/react"

type SubheadingProps = {
	children: ReactNode
	size?: "big" | "medium" | "small"
	bold?: boolean
}

const Subheading = ({children, size = "medium", bold}: SubheadingProps) => {
	const isBold = bold ? css({fontWeight: "700"}) : null
	return (
		<p css={[sizeSwitch(size), baseStyle, isBold]}>
			<span>
				{children}
			</span>
		</p>
	)
}

export default Subheading

const baseStyle = css({
	alignSelf: "start",
	display: "inline-block",
	"& span": {
		backgroundColor: "var(--accent)",
		display: "inline-flex",
		padding: ".8rem 1.4rem 1rem 1.4rem",
		boxDecorationBreak: "clone",
		WebkitBoxDecorationBreak: "clone",
		fontFamily: "acumin-pro-wide, sans-serif",
	},
})

const sizeSwitch = (size: SubheadingProps["size"]) => {
	switch (size) {
		case "big":
			return css({fontSize: "2.4rem", margin: "0 0 0 8rem"})
		case "medium":
			return css({fontSize: "1.8rem", margin: "0 0 0 6rem"})
		case "small":
			return css({fontSize: "1.35rem", margin: "0 0 0 4.5rem"})
		default:
			throw new Error("Invalid Size Prop for Subheading component")
	}
}
