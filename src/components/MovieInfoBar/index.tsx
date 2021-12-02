import {FC} from "react"
import {Wrapper, Content} from "./MovieInfoBar.styles"
import {calcTime, convertMoney} from "../../helpers"
import {Movie} from "../../types"

const MovieInfoBar:FC<{movie: Movie}> = ({movie}) => {
	return (
		<Wrapper>
			<Content>
				<div className="column">
					<p>Running time: {calcTime(movie.runtime)}</p>
				</div>
				<div className="column">
					<p>Budget: {convertMoney(movie.budget)}</p>
				</div>
				<div className="column">
					<p>Revenue: {convertMoney(movie.revenue)}</p>
				</div>
			</Content>
		</Wrapper>
	)
}

export default MovieInfoBar