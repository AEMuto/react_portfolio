import {ReactNode} from "react"
import {css} from "@emotion/react"
import {BaseProps} from "../types"

export type ButtonProps = BaseProps<HTMLButtonElement> & {
	children: ReactNode
	size?: "sm" | "md" | "lg" | "xl"
	option?: "primary" | "alternate"
}

const Button = ({children,size="md", option = "primary", ...rest}: ButtonProps) => {
	const style = [baseStyle, sizeSwitch(size), option === "primary" ? primaryStyle : alternateStyle]
	return (
		<button css={style} {...rest}>
			{children}
		</button>
	)
}

export default Button

const sizeSwitch = (size: ButtonProps["size"]) => {
	switch (size) {
		case "xl":
			return css`
				font-size: var(--font-size-xl);
				letter-spacing: calc(var(--font-size-xl) * .03);
			`
		case "lg":
			return css`
				font-size: var(--font-size-lg);
				letter-spacing: calc(var(--font-size-lg) * .04);
			`
		case "md":
			return css`
				font-size: var(--font-size-md);
				letter-spacing: calc(var(--font-size-md) * .05);
			`
		case "sm":
			return css`
				font-size: var(--font-size-sm);
				letter-spacing: calc(var(--font-size-sm) * .06);
			`
		default:
			throw new Error("Invalid Size Prop for Button component")
	}

}

const baseStyle = css`
  //font-size: 2.1rem;
	font-family: acumin-pro, sans-serif;
	font-weight: 600;
  padding: 1rem 1.6rem;
  border-radius: .5rem;
  border: solid 2px var(--txt);
  cursor: pointer;
  //margin-right: 2rem;
`

const primaryStyle = css`
  border: solid 2px var(--primary);
  background-color: var(--primary);
  color: var(--body);

  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`

const alternateStyle = css`
  border: solid 2px var(--primary);
  background-color: transparent;
  color: var(--primary);

  &:hover {
    background-color: var(--primary);
    color: var(--body);
  }
`
