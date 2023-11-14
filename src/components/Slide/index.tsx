import {css, SerializedStyles} from "@emotion/react"
import {ReactNode} from "react"

type SlideContainerProps = {
	children: ReactNode
	gridStyleProp?: SerializedStyles
	isHeader?: boolean
}

export const SlideContainer = ({children, gridStyleProp, isHeader=false}: SlideContainerProps) => {

	const gridStyle = gridStyleProp
		? gridStyleProp
		: css`grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`

	return isHeader ? (
		<header css={[containerStyle, gridStyle]}>
			{children}
		</header>
	) : (
		<section css={[containerStyle, gridStyle]}>
			{children}
		</section>
	)
}

const containerStyle = css`
  min-height: calc(100vh - 6.4rem);
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.6rem;
  display: grid;
`

type SlideColumnProps = {
	children: ReactNode,
	className?: string // Necessary for styled components. cf: https://emotion.sh/docs/styled#styling-any-component
}

export const SlideColumn = ({children, className}: SlideColumnProps) => {
	return (
		<div css={columnStyle} className={className}>
			{children}
		</div>
	)
}

const columnStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`
