import {FC} from "react"
import {Link} from "react-router-dom"
import {Wrapper, Content} from "./BreadCrumb.styles"

const BreadCrumb:FC<{title: string}> = ({title}) => {
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<span>Home</span>
				</Link>
				<span>|</span>
				<span>{title}</span>
			</Content>
		</Wrapper>
	)
}

export default BreadCrumb