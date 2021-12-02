import {useContext, FC} from "react"
import {useNavigate} from "react-router-dom"
import {UserContext} from "../User"
import {Link} from "react-router-dom"
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import {Wrapper, Content, LogoImg, TMDBLogoImg} from "./Header.styles"

const Header:FC = () => {
	const {user, setUser} = useContext(UserContext)
	const navigate = useNavigate()
	const handleLogout = () => {
		setUser({
			sessionId: "",
			username: ""
		})
		navigate("/login")
	}
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={RMDBLogo} alt="rmdb-logo" />
				</Link>
				<div>
					{user.username 
						? <div>
							<div>Hello {user.username}</div>
							<span onClick={handleLogout}>Log out</span>
						</div>
						: <Link to="./login">Login</Link>
					}
					<TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" /> 
				</div>
			</Content>
		</Wrapper>
	)
}

export default Header