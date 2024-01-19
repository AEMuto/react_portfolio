import Hero from "./Hero"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import React from "react"


const Home = () => {
	return (
		<React.Fragment>
			<Hero/>
			<About/>
			<Gallery/>
			<Contact/>
		</React.Fragment>
	)
}

export default Home;
