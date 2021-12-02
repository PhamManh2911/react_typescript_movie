import {useReducer, useEffect} from 'react'
import API from "../API"
import {getSessionStorage} from "../helpers"

const initialState = {
	movie: {},
	loading: false,
	err: false
}
interface State {
	movie: any,
	loading: boolean,
	err: boolean
}
type Actions = 
	{
		type: "toggle-loading" | "true-err" | "false-err"
	} | 
	{
		type: "set-movie",
		payload: {
			data: any
		}
	}
interface Member {
	job: string
}
const reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "set-movie" :
			return {
				...state, movie: action.payload.data
			}
		case "toggle-loading":
			return {...state, loading: !state.loading}
		case "false-err":
			return {...state, err: false}
		case "true-err":
			return {...state, err: true}
		default: 
			return state
	}
}
export default function useMovieFetch(movieId: string | undefined) {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		if (movieId === undefined) return
		const movieData = getSessionStorage(movieId)
		if (movieData) return dispatch({type: "set-movie", payload: {data: movieData}})
		const fetchData = async() => {
			try {
				dispatch({type: "toggle-loading"})
				dispatch({type: "false-err"})
				const movie = await API.fetchMovie(movieId)
				const credits = await API.fetchCredits(movieId)
				const directors = credits.crew.filter((member: Member) => member.job === "Director")
				dispatch({type: "set-movie", payload: {
					data: {
						...movie,
						cast: credits.cast,
						directors
					}
				}})
				dispatch({type: "toggle-loading"})
			} catch(err) {
				dispatch({type: "true-err"})
			}
		}
		fetchData()
	},[movieId])

	useEffect(() => {
		if (movieId === undefined) return
		sessionStorage.setItem(movieId,JSON.stringify(state.movie))
	},[movieId,state])
	
	return {
		movie: state.movie, 
		loading: state.loading, 
		err: state.err
	}
}