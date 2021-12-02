import {FC} from "react"
import {Wrapper} from "./Button.styles"

interface Props {
	text: string,
	callback: () => void
}

const Button:FC<Props> = ({text, callback}) => {
	return (
		<Wrapper onClick={callback}>
			{text}
		</Wrapper>
	)
}
export default Button