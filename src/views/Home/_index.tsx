import Layout from "../../components/Layout"
import Header from "./Header"
import About from "./About"
import Gallery from "./Gallery"


const Home = () => {
	return (
		<Layout>
			<h1>Home Page</h1>
			<Header/>
			<About/>
			<Gallery/>
		</Layout>
	)
}

export default Home;
