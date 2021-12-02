import {FC} from "react"
import {Wrapper, Content} from './Grid.styles'

const Grid:FC<{header: string}> = ({header,children}) => {
	return (
		<Wrapper>
			<h1>{header}</h1>
			<Content>{children}</Content>
		</Wrapper>
	)
}

export default Grid