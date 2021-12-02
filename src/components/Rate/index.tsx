import {useState, FC} from 'react'

interface Props {
	callback: (rate: string) => void
}

const Rate: FC<Props> = ({callback}) => {
	const [rate, setRate] = useState("5")
	return (
		<div>
			<p>
				<input 
					type="range"
					value={rate}
					min="1"
					max="10"
					onChange={event => setRate(event.target.value)}
				/>
				{rate}
			</p>
			<p>
				<button onClick={() => callback(rate)} >Rate</button>
			</p>
		</div>
	)
}

export default Rate