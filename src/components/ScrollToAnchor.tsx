import {useEffect, useLayoutEffect} from "react"
import {useLocation} from "react-router-dom"

const removeHashCharacter = (str: string) => str.slice(1)

const ScrollToAnchor = () => {
	// Old version
	// const location = useLocation()
	//
	// const hashElement = useMemo(() => {
	// 	console.log("location.hash", getHashElement(location.hash))
	// 	return getHashElement(location.hash)
	// }, [location])
	//
	// useEffect(() => {
	// 	if (hashElement) {
	// 		hashElement.scrollIntoView({
	// 			behavior: "smooth",
	// 			//inline: "nearest",
	// 			block: "end"
	// 		})
	// 	}
	// }, [hashElement])
	//
	// return null

	const location = useLocation()

	// By using useLayoutEffect, we make sure that the browser will have
	// updated the DOM before we try to scroll to the element.
	useLayoutEffect(() => {
		const {hash} = location
		if (location.pathname.includes("/project")) {
			document.scrollingElement?.scrollTo({
				top: 0,
			})
		}
		if (hash.length > 0) {
			const element = document.getElementById(removeHashCharacter(hash))

			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "end",
				})
			}
		}
	}, [location])

	return null
}

export default ScrollToAnchor
