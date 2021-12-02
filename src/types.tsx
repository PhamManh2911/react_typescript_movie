export interface Data {
	page: number,
	results: any[],
	total_pages: number,
	total_results: number,
}
export interface State {
	movies: Data,
	searchMovies: Data,
	loading: boolean,
	err: boolean,
	searchTerm: string,
	page: number
}
export interface Movie {
	id: string,
	title: string,
	original_title: string,
	overview: string,
	directors: any[],
	vote_average: number,
	release_date: string,
	poster_path: string,
	backdrop_path: string,
	runtime: number,
	budget: number,
	revenue: number
}
export interface ActorInterface {
	cast_id: number,
	name: string,
	character: string,
	profile_path: string,

}
export type Actions = 
	{ type: "toggle-loading" | "true-err" | "false-err" | "reset-page" | "set-page"}
	| {
		type: "set-search-movie" | "set-available-movies" | "set-movies",
		payload: {data: Data}
	}
	| {
		type: "set-search-term",
		payload: {data: string}
	}