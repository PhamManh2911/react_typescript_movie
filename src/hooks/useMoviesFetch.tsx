import {useEffect, useReducer, useRef, useCallback} from "react"
import API from "../API"
import {getSessionStorage} from "../helpers"
import {State, Actions} from "../types"

const initialPage = 1
const initialMovies = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0
}
const initialState = {
	movies: initialMovies,
	searchMovies: initialMovies,
	loading: false,
	err: false,
	searchTerm: "",
	page: initialPage
}
const reducer = (state: State, action: Actions) => {
	switch (action.type) {
		case "toggle-loading": 
			return {
				...state,
				loading: !state.loading 
			}
		case "false-err": 
			return {
				...state,
				err: false 
			}
		case "true-err": 
			return {
				...state,
				err: true 
			}
		case "set-search-movie":
			return {
				...state,
				searchMovies: {
					...action.payload.data,
					results: action.payload.data.page > 1 
					? [...state.searchMovies.results,...action.payload.data.results] 
					: [...action.payload.data.results]
				}
			}
		case "set-movies":
			return {
				...state,
				movies: {
					...action.payload.data,
					results: action.payload.data.page > 1 
					? [...state.movies.results,...action.payload.data.results]
					: [...action.payload.data.results]
				}
			}
		case "reset-page" :
			return {
				...state,
				page: initialPage
			}
		case "set-page" :
			return {
				...state,
				page: state.page+1
			}
		case "set-search-term" :
			return {
				...state,
				searchTerm: action.payload.data
			}
		default:
			return state
	}
}

export default function useMoviesFetch() {
	const [state, dispatch] = useReducer(reducer,initialState)
	const searchTerm = useRef(state.searchTerm)
	
	const fetchData = useCallback(async() => {
		try {
			dispatch({type: "toggle-loading"})
			dispatch({type: "false-err"})
			const data = await API.fetchMovies(state.searchTerm,state.page)
			state.searchTerm 
				? (state.page > 1 
					? dispatch({type: "set-movies", payload: {data}}) 
					: dispatch({type: "set-search-movie", payload: {data}}))
				: dispatch({type: "set-movies", payload: {data}})
			dispatch({type: "toggle-loading"})
		} catch(err) {
			dispatch({type: "true-err"})
		}
	},[state.page, state.searchTerm])

	useEffect(() => {
		const dataFromStorage = getSessionStorage("homePage")
		if (!state.searchTerm && dataFromStorage && state.page === 1) return dispatch({type: "set-movies", payload: {data: dataFromStorage}})
		if (state.searchTerm !== searchTerm.current) {
			searchTerm.current = state.searchTerm
			dispatch({type: "reset-page"})
		}
		fetchData()
	},[state.searchTerm, state.page, fetchData])

	useEffect(() => {
		if (!state.searchTerm && state.page === 1) return sessionStorage.setItem("homePage", JSON.stringify(state.movies))
	},[state.searchTerm,state.movies,state.page])

	return {
		movies: state.movies, 
		searchMovies: state.searchMovies, 
		loading: state.loading, 
		err: state.err, 
		searchTerm: state.searchTerm, 
		dispatch
	}
}