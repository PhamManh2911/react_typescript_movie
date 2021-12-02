import useMovieFetch from "../hooks/useMovieFetch"
import {useParams} from "react-router-dom"
import Spinner from "./Spinner"
import {POSTER_SIZE, IMAGE_BASE_URL} from "../config"
import BreadCrumb from "./BreadCrumb"
import MovieInfo from "./MovieInfo"
import MovieInfoBar from "./MovieInfoBar"
import Grid from "./Grid"
import Actor from "./Actor"
import NoImage from "../images/no_image.jpg"
import {ActorInterface} from "../types"

export default function Movie() {
	const {movieId} = useParams()
	const {movie, loading, err} = useMovieFetch(movieId)
	if (err) return <div>Something went wrong</div>
	if (loading) return <Spinner />
	return (
		<>
			<BreadCrumb title={movie.original_title} />
			<MovieInfo movie={movie} />
			<MovieInfoBar movie={movie} />
			<Grid header="Actors">
				{movie?.cast?.map((actor: ActorInterface) => 
					<Actor 
					key={actor.cast_id} 
					name={actor.name}
					character={actor.character}
					image={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
						: NoImage} />
				)}
			</Grid>
		</>
	)
}