import useMoviesFetch from "../hooks/useMoviesFetch"
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config"
import NoImage from "../images/no_image.jpg"
import HeroImage from "./HeroImage"
import SearchBar from "./SearchBar"
import Grid from "./Grid"
import Thumb from "./Thumb"
import Button from "./Button"
import Spinner from "./Spinner"
import NotFoundPage from "./NotFoundPage"

export default function Home() {
	const {movies, searchMovies, loading, err, searchTerm, dispatch} = useMoviesFetch()
	if (err) return (<NotFoundPage />)
	return (
		<> 
			{movies.results[0] && !searchTerm &&
				(<HeroImage 
				image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`} 
				title={movies.results[0].original_title}
				text={movies.results[0].overview}
				/>)
			}
			<SearchBar dispatch={dispatch} 
				searchedList={searchTerm ? searchMovies.results.slice(0,5): null}
				searchMovies={searchMovies} />
			<Grid header={searchTerm ? "Searching Results" : "Popular movies"}>
				{movies.results.length ? 
					movies.results.map(movie => 
						<Thumb
							key={movie.id}
							image={movie.poster_path 
								?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage}
							clickable={true}
							movieId={movie.id}
							title={movie.title}
							>						
						</Thumb>
					)
					: null
				}
			</Grid>
			{movies.page < movies.total_pages && !loading && (<Button text="Load more" callback={() => dispatch({type: "set-page"})} />)}
			{loading && <Spinner />}
		</>
	)
}