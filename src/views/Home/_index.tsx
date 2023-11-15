import Layout from "../../components/Layout"
import Header from "./Header"
import About from "./About"
import Gallery from "./Gallery"
import Contact from "./Contact"


const Home = () => {
	return (
		<Layout>
			<Header/>
			<About/>
			<Gallery/>
			<Contact/>
		</Layout>
	)
}

export default Home;
