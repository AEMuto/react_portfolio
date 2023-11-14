import React, {ReactNode} from "react"
import Footer from "./_Footer"
import Nav from "./_Nav"
import styled from "@emotion/styled"

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
	return (
		<React.Fragment>
			<Nav/>
			<StyledMain>
				{children}
			</StyledMain>
			<Footer/>
		</React.Fragment>
	)
}

export default Layout

const StyledMain = styled.main`
  margin-top: 6.4rem;
  min-height: calc(100vh - 12.8rem);
  overflow: hidden;
  position: relative;
`
