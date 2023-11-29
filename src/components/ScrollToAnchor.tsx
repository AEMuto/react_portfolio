import {useLayoutEffect} from "react"
import {useLocation} from "react-router-dom"

const removeHashCharacter = (str: string) => str.slice(1)

const ScrollToAnchor = () => {
	const location = useLocation()
	// By using useLayoutEffect, we make sure that the browser will have
	// updated the DOM before we try to scroll to the element, since
	// we use ID
	useLayoutEffect(() => {
		const {hash} = location
		// Scroll to top when navigating to a new project
		if (location.pathname.includes("/project")) {
			document.scrollingElement?.scrollTo({
				top: 0,
			})
		}
		// Scroll to the element with the id matching the hash in the url
		if (hash.length > 0) {
			const element = document.getElementById(removeHashCharacter(hash))
			const yOffset = -64 // navbar height
			if (element) {
				const y = element?.getBoundingClientRect().top + window.scrollY + yOffset
				window.scrollTo({top: y, behavior: "smooth"})
			}
		}
	}, [location])

	return null
}

export default ScrollToAnchor
