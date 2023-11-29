import {SlideContainer} from "../../components/Slide"
import Button from "../../components/Button"
import styled from "@emotion/styled"
import {css} from "@emotion/react"

const Contact = () => {
	return (
		<StyledContainer id="contact" gridStyleProp={false}>
			<a href="mailto:antoine.marseaud@gmail.com" title="Me contacter par mail">
				<Button>
					Me Contacter
				</Button>
			</a>
		</StyledContainer>
	)
}

export default Contact

const StyledContainer = styled(SlideContainer)`
  place-items: center;
`
