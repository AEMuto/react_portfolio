import {css, SerializedStyles} from "@emotion/react"
import React, {ReactNode} from "react"
import {BaseProps} from "../../types"

type SlideContainerProps = BaseProps<HTMLElement> & {
	children: ReactNode
	gridStyleProp?: SerializedStyles | false
	isHeader?: boolean
}

export const SlideContainer = ({children, gridStyleProp, isHeader=false, ...rest}: SlideContainerProps) => {

	const gridStyle = gridStyleProp
		? gridStyleProp
		: gridStyleProp === false
			? null
			: css`grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));`

	return isHeader ? (
		<header css={[containerStyle, gridStyle]} {...rest}>
			{children}
		</header>
	) : (
		<section css={[containerStyle, gridStyle]} {...rest}>
			{children}
		</section>
	)
}

const containerStyle = css`
  min-height: calc(100vh - 6.4rem);
  max-width: 1152px;
  margin: 0 auto;
  //padding: 1.6rem;
  display: grid;
`

type SlideColumnProps = BaseProps<HTMLDivElement> & {
	children: ReactNode,
}

export const SlideColumn = ({children, ...rest}: SlideColumnProps) => {
	return (
		<div css={columnStyle} {...rest}>
			{children}
		</div>
	)
}

const columnStyle = css`
	@media (max-width: 768px) {
		padding: 2rem 1.6rem 2rem 1.6rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
	padding: 0 1.6rem;
	max-width: 100vw;
`
