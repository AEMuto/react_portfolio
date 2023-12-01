import Header from "./Header"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"
import React from "react"


const Home = () => {
	return (
		<React.Fragment>
			<Header/>
			<About/>
			<Gallery/>
			<Contact/>
		</React.Fragment>
	)
}

export default Home;
