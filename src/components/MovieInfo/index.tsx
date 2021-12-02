import {useState, useContext, FC} from "react"
import {UserContext} from "../User"
import Thumb from "../Thumb"
import {Wrapper, Content, Text} from "./MovieInfo.styles"
import Rate from "../Rate"
import API from "../../API"
import NoImage from "../../images/no_image.jpg"
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import {Movie} from "../../types"

const MovieInfo:FC<{movie: Movie}> = ({movie}) => {
	const [ratedMovie, setRatedMovie] = useState(false)
	const {user} = useContext(UserContext)
	const handleRate = async(rate: string) => {
		const rating = await API.rateMovie(
			user.sessionId,
			movie.id,
			rate)
		setRatedMovie(rating.success)
	}
	return (
		<Wrapper backdrop={movie.backdrop_path}>
			<Content>
				<Thumb 
					image={movie.poster_path 
						? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
						: NoImage
					}
					title={movie.original_title}
					clickable={false} />
				<Text>
					<h1>{movie.original_title}</h1>
					<h3>STORY</h3>
					<p>{movie.overview}</p>
					<div className="rating-directors">
						<div>
							<h3>Rating</h3>
							<div className="score">{movie.vote_average}</div>
						</div>
						<div className="director">
							<h3>DIRECTOR{movie?.directors?.length > 1 && ("S")}</h3>
							{movie?.directors?.map(director => <div key={director.credit_id}>{director.name}</div>)}
						</div>
					</div>
					{user.username && (
						ratedMovie ? 
						<p>You have rated this movie</p>
						: (<div>
							<p>Rate movie</p>
							<Rate callback={handleRate} />
							</div>)
					)}
				</Text>	
			</Content>			
		</Wrapper>
	)
}

export default MovieInfo