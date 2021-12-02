import {useState, useEffect, useRef, Dispatch, FC} from "react"
import {Wrapper, Content} from './SearchBar.styles'
import SearchedMovie from "./SearchedMovie"
import searchIcon from "../../images/search-icon.svg"
import {Data, Actions} from "../../types"

interface Props {
	dispatch: Dispatch<Actions>,
	searchedList: any[] | null,
	searchMovies: Data
}

const SearchBar:FC<Props> = ({dispatch, searchedList, searchMovies}) => {
	const [state, setState] = useState("")
	const [searchSession, setSearchSession] = useState(true)
	const initialMounting = useRef(true)
	useEffect(() => {
		setSearchSession(true)
		if (initialMounting.current) {
			initialMounting.current = false
			return
		}
		const timer = setTimeout(() => 
			dispatch({type: "set-search-term", payload: {data: state}}),300)
		return () => clearTimeout(timer)
	},[dispatch,state])
	const handleSearch = () => {
		dispatch({type: "set-movies", payload: {data: searchMovies}})
		setSearchSession(false)
	}
	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt="search-icon" />
				<input type="text" placeholder="Search Movies" value={state} onChange={event => setState(event.target.value)} />
				{searchedList !== null && searchSession ? 
					<div className="searching-result">
						{searchedList!.map(movie => 
							<SearchedMovie key={movie.id} movie={movie} />
						)}
						<div className="more-movie" onClick={handleSearch}>
							View all results
						</div>
					</div>
					: null
				}
			</Content>
		</Wrapper>
	)
}

export default SearchBar