import {FC} from "react"
import {Wrapper, Image} from "./Actor.styles"

interface Props {
	name: string,
	character: string,
	image: string
}

const Actor:FC<Props> = ({name, character, image}) => {
	return (
		<Wrapper>
			<Image src={image} alt="actor-thumb" title={name}></Image>
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	)
}

export default Actor