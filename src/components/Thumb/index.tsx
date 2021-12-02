import {FC} from "react"
import {Link} from "react-router-dom"
import {Image} from "./Thumb.styles"

interface Props {
	image: string,
	movieId?: number,
	clickable: boolean,
	title: string
}

const Thumb:FC<Props> = ({image, movieId, clickable, title}) => {
	return (
		<>
			{clickable ? (
				<Link to={`/${movieId}`}>
					<Image src={image} alt="movie-thumb" title={title} />
				</Link>
			)
			: (
				<Image src={image} alt="movie-thumb" title={title} />
			)}
		</>
	)
}

export default Thumb