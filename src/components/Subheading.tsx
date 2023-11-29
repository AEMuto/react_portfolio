import {ReactNode} from "react"
import {css} from "@emotion/react"
import {BaseProps} from "../types"

type SubheadingProps = BaseProps<HTMLParagraphElement> & {
	children: ReactNode
	size?: "sm" | "md" | "lg"
	bold?: boolean
	margin?: string
}

const Subheading = ({children, size = "md", bold, margin, ...rest}: SubheadingProps) => {
	const isBold = bold ? css({fontWeight: "700"}) : null
	return (
		<em css={[sizeSwitch(size, margin), baseStyle, isBold]} {...rest}>
			<span>
				{children}
			</span>
		</em>
	)
}

export default Subheading

const baseStyle = css`
	@media (max-width: 768px) {
		//margin: 0 auto;
  }
	align-self: start;
	display: inline-block;
	& span {
		background-color: var(--accent);
		display: inline-flex;
		padding: .8rem 1.4rem 1rem 1.4rem;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		font-family: acumin-pro-wide, sans-serif;
	}
	
`

const sizeSwitch = (size: SubheadingProps["size"], margin: string | undefined) => {
	switch (size) {
		case "lg":
			return css({fontSize: "var(--font-size-lg)", margin: margin ?? "0 0 0 8rem"})
		case "md":
			return css({fontSize: "var(--font-size-md)", margin: margin ?? "0 0 0 6rem"})
		case "sm":
			return css({fontSize: "var(--font-size-sm)", margin: margin ?? "0 0 0 4.5rem"})
		default:
			throw new Error("Invalid Size Prop for Subheading component")
	}
}
