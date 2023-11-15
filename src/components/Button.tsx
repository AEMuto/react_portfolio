import {ReactNode} from "react"
import {css} from "@emotion/react"
import {BaseProps} from "../types"

export type ButtonProps = BaseProps<HTMLButtonElement> & {
	children: ReactNode
	option?: "primary" | "alternate"
}

const Button = ({children, option = "primary", ...rest}: ButtonProps) => {
	return (
		<button css={
			[baseStyle, option === "primary" ? primaryStyle : alternateStyle]
		} {...rest}>
			{children}
		</button>
	)
}

export default Button

const baseStyle = css`
  font-size: 2.1rem;
  padding: 1rem 1.6rem;
  border-radius: .5rem;
  border: solid 2px var(--txt);
  cursor: pointer;
  margin-right: 2rem;
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
