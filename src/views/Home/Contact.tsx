import {SlideContainer} from "../../components/Slide"
import Button from "../../components/Button"
import styled from "@emotion/styled"

const Contact = () => {
	return (
		<StyledContainer id="contact">
			<Button>
				Me Contacter
			</Button>
		</StyledContainer>
	)
}

export default Contact

const StyledContainer = styled(SlideContainer)`
  place-items: center;
`
