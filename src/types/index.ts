import React from "react"

export type BaseProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T> & {
	className?: string // Necessary for styled components. cf: https://emotion.sh/docs/styled#styling-any-component
}
