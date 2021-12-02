import {FC} from "react"
import {Link} from "react-router-dom"
import {Wrapper, Image, Content} from "./SearchedMovie.styles"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../config"
import {Movie} from "../../../types"

const SearchedMovie:FC<{movie: Movie}> = ({movie}) => {
	return (
		<Wrapper>
			<Link to={`/${movie.id}`} title={movie.title}>
				<Image src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} />
				<Content>
					<div>{movie.title}</div>
					<div>
						<span>&#9734;  {movie.vote_average}</span>
						<span>&#9830;  {movie.release_date.slice(0,4)}</span>
					</div>
				</Content>
			</Link>
		</Wrapper>
	)
}
export default SearchedMovie