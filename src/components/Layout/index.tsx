import React, {ReactNode} from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
	return (
		<React.Fragment>
			<Nav/>
			{children}
			<Footer/>
		</React.Fragment>
	)
}

export default Layout;
